import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../firebase';
import ImageUploading from 'react-images-uploading';
import { useImageStore } from '../../store';
import { loadUserInfo } from '../../functions/localStorageFunctions';
import ProgressWithLabel from '../CircularProgressLabel/ProgressWithLabel';

const ImageUploader = () => {
    const { uploadingProgress, setDownloadUrl, setUploadingProgress } = useImageStore();
    const maxNumber = 1;
    const [images, setImages] = useState();

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
        if (imageList.length === 1) {
            uploadPhoto(imageList[0]['data_url']);
        }
    };

    const uploadPhoto = async (image) => {
        if (!image) return;
        try {
            const response = await fetch(image);
            const blob = await response.blob();

            const { userId } = loadUserInfo();
            const imageRef = ref(storage, `images/${userId}/${uuidv4()}`);
            const uploadTask = uploadBytesResumable(imageRef, blob)

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setUploadingProgress(progress);
                },
                (error) => {
                    console.log(error);
                    console.log(error.serverResponse);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            setDownloadUrl(downloadURL);
                        });
                }
            );
            } catch (error) {
                console.error('Failed to convert data URL to blob:', error);
            }
        }
    return (
        <div className="App">
            <ImageUploading
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemove,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <Button
                            sx={{
                                marginTop: "3px",
                                marginBottom: "10px",
                                width: "160px",
                            }}
                            component="label"
                            color="secondary"
                            size="small"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            onClick={onImageUpload}
                        >
                            Upload a Photo
                        </Button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <Box sx={{width: "200px"}}>
                                    <img src={image['data_url']} alt="" width="200" />
                                    <ProgressWithLabel value={uploadingProgress} />
                                </Box>
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => {
                                        setDownloadUrl(null);
                                        onImageRemove(index);
                                    }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};


export default ImageUploader;
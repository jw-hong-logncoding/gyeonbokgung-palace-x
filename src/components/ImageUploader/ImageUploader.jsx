import { Button } from '@mui/material';
import React from 'react';
import ImageUploading from 'react-images-uploading';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ImageUploader = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
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
                                <img src={image['data_url']} alt="" width="200" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}

export default ImageUploader;
import { Box, Button, Card, CardContent, Divider, FormControl, MenuItem, Select, Stack, TextField, TextareaAutosize, Typography, styled } from "@mui/material";
import { BUILDING_DATA_LIST } from "../../data";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";

const ReviewForm = () => {
    const [buildingState, setBuildingState] = useState();

    const handleBuildingChange = (e) => {
        console.log(e.target.value);
        setBuildingState(e.target.value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Card sx={{
                    minWidth: {
                        xs: "350px",
                        md: "550px"
                    },
                    maxWidth: "700px",
                    marginTop: "10px"
                }}>
                
                <CardContent
                >
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "27px",
                                marginBottom: "10px"
                            }}
                        >
                            Write A Review
                        </Typography>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px"
                        }}
                    >
                    <Stack
                        display="flex"
                        alignItems="left"
                        width="400px"
                    >
                        <Stack
                            flexDirection='row'
                            alignItems="center"
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold"
                                }}
                            >{`Building: `}</Typography>
                            <FormControl sx={{
                                m: 1,
                                width: '100%',
                                marginLeft: "20px"
                            }} size="small">
                                <Select
                                    onChange={handleBuildingChange}
                                >
                                {BUILDING_DATA_LIST
                                    .map(({title, value}, i) => {
                                        return (
                                            <MenuItem key={i} value={value}>{title}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                            </FormControl>
                        </Stack>
                        <Stack
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                {`Keywords: `}
                            </Typography>
                            <Box
                                sx={{
                                    paddingRight: "20px",
                                    width: "100%"
                                }}
                            >
                                <TextField
                                    sx={{
                                        marginLeft: "10px",
                                        width: "100%"
                                    }}
                                    id="standard-basic"
                                    variant="standard"
                                />
                            </Box>
                       </Stack>
                        <Stack
                            flexDirection='row'
                            alignItems="center"
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >{`Hashtags: `}</Typography>
                            <FormControl sx={{
                                m: 1,
                                width: '100%',
                                marginLeft: "10px"
                                }} size="small"
                            >
                                <Select
                                    onChange={handleBuildingChange}
                                >
                                {BUILDING_DATA_LIST
                                    .map(({title, value}, i) => {
                                        return (
                                            <MenuItem key={i} value={value}>{title}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                            </FormControl>
                        </Stack>
                        <Stack
                            alignItems="left"
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >{`Review: `}</Typography>
                            <Box
                                sx={{
                                    marginTop: "5px",
                                }}
                            >
                                <TextareaAutosize
                                    style={{
                                        width: "100%",
                                        minHeight: "50px",
                                        maxHeight: "400px",
                                        overflow: "auto"
                                    }}
                                    aria-label="minimum height"
                                    minRows={3}
                                    maxLength={600}
                                    placeholder="Write review here"
                                />
                            </Box>
                            <Stack
                                alignItems="left"
                                flexDirection="row"
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold'
                                    }}
                                >{`Optional: `}</Typography>
                                <Button
                                    sx={{
                                        width: "160px",
                                        marginLeft: "10px"
                                    }}
                                    component="label"
                                    color="secondary"
                                    size="small"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload a Photo
                                    <VisuallyHiddenInput type="file" />
                                </Button>
                            </Stack>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'right',
                                    marginTop: '30px'
                                }}
                            >
                                <Button
                                    variant="contained"
                                >
                                    Post
                                </Button>
                            </Box>
                        </Stack>
                    </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

export default ReviewForm;
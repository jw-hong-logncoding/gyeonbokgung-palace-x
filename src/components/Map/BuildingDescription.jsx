import { Button, Stack, Box, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BuildingDescription = ({title, photo, keywordList, description }) => {
    const navigate = useNavigate();
    console.log(keywordList)
    return (
        <div>
            <Stack>
                <Box
                    marginLeft="15px"
                >
                    <Typography
                        sx={{
                            fontSize: "30px",
                            marginBottom: "10px"
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Divider />
                <Box
                    display="flex"
                    marginY="10px"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        component="img"
                        sx={{
                            width: {
                                xs: "95%",
                                md: "440px"
                            },
                            boxShadow: '10px 10px 45px rgba(0, 0, 0, 0.15)'  // 그림자 추가
                        }}
                        src={photo}
                    />
                </Box>
                <Box
                    marginLeft="15px"
                >
                    <Box
                        marginBottom="8px"
                    >
                        <Typography
                            fontSize="20px"
                            fontWeight="bold"
                        >
                            Keywords:
                        </Typography>
                    </Box>
                    {keywordList
                        .map((keyword, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'inline-block',
                                    color: 'white',
                                    bgcolor: 'secondary.light',
                                    borderRadius: '15px',
                                    padding: '5px 10px 5px 10px',
                                    marginRight: '5px'
                                }}
                            >
                                {keyword}
                            </Box>
                        ))
                    }
                    <Box
                        marginTop="10px"
                    >
                        <Typography
                            fontSize="20px"
                            fontWeight="bold"
                        >
                            Description:
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '10px',
                            padding: '0px 25px 0px 20px'

                        }}
                    >
                        {description}
                    </Box>

                    </Box>
                                    <Stack
                        marginTop="20px"
                        marginBottom="40px"
                        alignItems='center'
                        justifyContent='center'
                        flexDirection='row'
                        gap={{
                            xs: "10px",
                            sm: "50px"
                        }}
                    >
                    <Box
                        width="180px"
                    >
                        <Button
                            variant='contained'
                            color="secondary"
                            fullWidth
                            onClick={() => {navigate('/community')}}
                        >
                            View
                        </Button>
                    </Box>
                    <Box
                        width="180px"
                    >
                        <Button
                            variant='contained'
                            color="secondary"
                            fullWidth
                            onClick={() => {
                                navigate("/review-form");
                            }}
                        >
                            Write
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </div>
    )
}

export default BuildingDescription;
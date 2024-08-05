import { Button, Stack, Box, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BuildingDescription = ({ title, photo, keywordList, description }) => {
    const navigate = useNavigate();

    const handleWriteClick = () => {
        navigate("/review-form", { state: { title: title.toLowerCase() } });
    };
    const handleBackClick = () => {
        navigate('/map'); 
    };

    return (
        <div>
            <Stack>
                <Box marginLeft="15px" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography sx={{ fontSize: "30px", marginBottom: "10px" }}>
                        {title}
                    </Typography>
<Button 
    style={{ marginRight: "15px", marginBottom: "8px" }} 
    onClick={handleBackClick} 
    startIcon={<ArrowBackIcon />}
>
    Back
</Button>
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
                                md: "440px",
                            },
                            boxShadow: '10px 10px 45px rgba(0, 0, 0, 0.15)', // 그림자 추가
                        }}
                        src={photo}
                    />
                </Box>
                <Box
                    padding={{
                        xs: "0px 10px",
                        sm: "0px 30px",
                    }}
                >
                    <Box marginBottom="3px">
                        <Typography fontSize="20px" fontWeight="bold">
                            Keywords:
                        </Typography>
                    </Box>
                    {keywordList.map((keyword, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'inline-block',
                                color: 'white',
                                bgcolor: 'secondary.light',
                                borderRadius: '15px',
                                padding: '5px 10px 5px 10px',
                                marginTop: '5px',
                                marginRight: '5px',
                            }}
                        >
                            {keyword}
                        </Box>
                    ))}
                    <Box marginTop="10px">
                        <Typography fontSize="20px" fontWeight="bold">
                            Description:
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: '10px' }}>
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
                        sm: "50px",
                    }}
                >
                    <Box width="180px">
                        <Button
                            variant='contained'
                            color="secondary"
                            fullWidth
                            onClick={() => { navigate('/community') }}
                        >
                            View
                        </Button>
                    </Box>
                    <Box width="180px">
                        <Button
                            variant='contained'
                            color="secondary"
                            fullWidth
                            onClick={handleWriteClick}
                        >
                            Write
                        </Button>
                    </Box>
                </Stack>
            </Stack>
        </div>
    );
}

export default BuildingDescription;

import { Button, Stack, Box, Typography, Divider } from "@mui/material";

const BuildingDescription = ({title, photo, keywordList, description }) => {
    return (
        <div>
            <Stack>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "30px",
                            marginBottom: "10px"
                        }}
                    >
                        {title}
                    </Typography>
                    <Divider />
                </Box>
                <Box>
                    <img src={photo}/>
                </Box>
                <Box>
                    <Box>
                        <Typography>
                            Keywords:
                        </Typography>
                    </Box>
                    {keywordList
                        .map((keyword, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'inline-block',
                                    bgcolor: 'skyblue',
                                    borderRadius: '15px',
                                    padding: '5px 10px 5px 10px',
                                    marginRight: '5px'
                                }}
                            >
                                {keyword}
                            </Box>
                        ))
                    }
                </Box>
                <Box
                    sx={{
                        marginTop: '20px',
                        padding: '0px 20px 0px 20px'

                    }}
                >
                    {description}
                </Box>
                <Stack
                    marginTop="10px"
                    alignItems='center'
                    justifyContent='space-around'
                    flexDirection='row'
                >
                    <Button>
                        View
                    </Button>
                    <Button>
                        Write
                    </Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default BuildingDescription;
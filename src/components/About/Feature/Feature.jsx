import { Stack, Typography } from "@mui/material";
import IMAGES from "../../../assets/images";

const Feature = () => {
    return (
        <>
            <Stack
                marginTop="280px"
            >
                <Typography
                    sx={{
                        background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.4))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        display: 'inline',
                        fontSize: {
                            sm: '78px',
                            xs: '38px'
                        }
                    }}
                    variant="mainPageTitle">
                    Features
                </Typography>
                <Stack
                    sx={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: "40px",
                        gap: "80px"
                    }}
                >
                    <Stack
                        sx={{
                            marginTop: "20px"   
                        }}
                    >
                        <img
                            style={{
                                width: "130px",
                                height: "130px"
                            }}
                            src={IMAGES.share}
                        />
                        <Typography
                            color="white"
                        >
                            share{/* // children */}
                        </Typography>
                    </Stack>
                    <Stack
                        sx={{
                            marginTop: "20px"
                        }}
                    >
                        <img
                        style={{
                            width: "130px",
                            height: "130px"
                        }}
                            src={IMAGES.tour}
                        />
                        <Typography
                        color="white"
                        >
                            tour
                        </Typography>
                    </Stack>
                      
                </Stack>
            </Stack>

            <Stack
                gap='30px'
                alignItems="center"
                marginTop="20px"
            >
                <Typography
                    sx={{
                        background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.4))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        display: 'inline',
                        fontSize: {
                            sm: '78px',
                            xs: '38px'
                        }
                    }}
                    variant="mainPageTitle">
                    Gyeongbokgung Palace
                </Typography>
                <Typography
                    sx={{
                        marginTop: "20px",
                        color:"white",
                        fontsize: {
                            sm:'56px',
                            xs: '32px'
                        },
                        width: {
                            sm: '800px',
                            xs: '400px'
                        }

                    }}
                >Gyeongbokgung Palace in Seoul, South Korea, is a renowned Joseon Dynasty palace built in 1395. Famous for its splendid buildings and gardens, it showcases traditional Korean architecture and various artworks, providing visitors with an immersive experience of Korean history and culture.</Typography>
            </Stack>

            <Stack
                alignItems= 'center'
                marginTop="20px"
            >
                <Typography
                    sx={{
                    background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.4))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline',
                    fontSize: {
                        sm: '78px',
                        xs: '38px'
                    }}}
                    variant="mainPageTitle"
                >
                    Joseon Dynasty
                </Typography>
                <Stack
                    alignItems="left"
                    marginTop="50px"
                >
                    <Typography
                        color= 'white'
                        fontSize={{
                            xs:"18px",
                            sm:"20px"
                        }}
                        textAlign={{
                            xs: 'center',
                            sm: 'left'
                        }}
                        marginTop="10px"
                    >
                        #1. Rise of Joseon Dynasty (1392 ~ 1506)
                    </Typography>
                    <Typography
                        color= 'white'
                        marginTop="15px"
                        textAlign={{
                            xs: 'center',
                            sm: 'left'
                        }}
                    >
                        태조 정종 태종 세종 문종 단종 세조 예종 성종 연산군{<br />}
                        Taejo - Jeongjong - Taejong - Sejong - Munjong - Danjong - Sejo- Yejong - Seongjong - Yeonsangun
                    </Typography>
                    <Typography
                        color= 'white'
                        fontSize="20px"
                        textAlign={{
                            xs: 'center',
                            sm: 'left'
                        }}
                        marginTop="40px"
                    >
                        #2. Expansion of Joseon Dynasty (1506 ~ 1637)
                    </Typography>
                    <Typography
                        color= 'white'
                        marginTop="15px"
                        textAlign={{
                            xs: 'center',
                            sm: 'left'
                        }}
                    >
                        중종 인종 명종 선조 광해군 인조 효종 현종{<br />}
                        Jungjong - Injong - Myeongjong - Seonjo - Gwanghaegun - Injo - Hyojong - Hyeonjong
                    </Typography>
                    <Typography
                        color= 'white'
                        fontSize="20px"
                        marginTop="40px"
                        textAlign={{
                            xs: 'center',
                            sm: 'left'
                        }}
                    >
                        #3. Fall of Joseon Dynasty (1637 ~ 1897)
                    </Typography>
                    <Typography
                        color= 'white'
                        marginTop="15px"
                        textAlign={{
                            xs: 'center',
                            sm: 'left'
                        }}
                    >
                        숙종 경종 영조 정조 순조 헌종 철종 고종 순종{<br />}
                        Sukjong - Gyeongjong - Yeongjo - Jeongjo - Sunjo - Heonjong - Cheoljong - Gojong - Sunjong
                    </Typography>
                </Stack>
                 <Stack
                 alignItems="center"
                 >
                      <Typography
                        sx={{
                            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.4))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline',
                            marginTop: '80px',
                            fontSize: {
                                sm: '78px',
                                xs: '38px'
                            }}}
                            variant="mainPageTitle"
                        >
                            Jo / Jung / Gun
                        </Typography>
                        <Typography
                            color= 'white'
                            fontSize="20px"
                            textAlign='left'
                            marginTop="50px"
                        >
                            #1. JO
                        </Typography>
                        <Typography
                            color= 'white'
                            marginTop="10px"
                            textAlign={{
                                xs: 'center',
                                sm: 'left'
                            }}
                        >
                            For remarkable achievements such as significant reforms or national stability.
                        </Typography>
                        <Typography
                            color= 'white'
                            fontSize="20px"
                            textAlign='left'
                            marginTop="20px"
                        >
                            #2. JONG
                        </Typography>
                        <Typography
                            color= 'white'
                            marginTop="10px"
                            textAlign={{
                                xs: 'center',
                                sm: 'left'
                            }}
                        >
                            For smooth ascensions and compassionate leadership, earning public admiration.
                        </Typography>
                        <Typography
                            color= 'white'
                            fontSize="20px"
                            textAlign='left'
                            marginTop="20px"
                        >
                            #3. GUN
                        </Typography>
                        <Typography
                            color= 'white'
                            marginTop="10px"
                            textAlign={{
                                xs: 'center',
                                sm: 'left'
                            }}
                        >
                            Without notable accomplishments or who abdicated, often implying a negative evaluation.
                        </Typography>
                </Stack>

                <Stack
                    paddingBottom='100px'
                >
                    <Typography
                        sx={{
                            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.4))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline',
                            marginTop: '60px',
                            fontSize: {
                                sm: '78px',
                                xs: '38px'
                            }}}
                        variant="mainPageTitle"
                        >
                            Contact
                        </Typography>
                        <Typography
                            color= 'white'
                            marginTop="20px"
                        >
                            Jungwook Hong
                        </Typography>
                        <Typography
                            color= 'white'
                            marginTop="10px"
                        >
                            <a
                                style={{
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                                href="mailto: example@gmail.com">
                                example@gmail.com
                            </a>
                        </Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default Feature;
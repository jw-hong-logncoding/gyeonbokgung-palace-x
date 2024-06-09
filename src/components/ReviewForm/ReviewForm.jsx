import { FormControl, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { BUILDING_DATA_LIST } from "../../data";
import { useState } from "react";

const ReviewForm = () => {
    const [buildingState, setBuildingState] = useState();

    const handleBuildingChange = (e) => {
        console.log(e.target.value);
        setBuildingState(e.target.value);
    };

    return (
        <div>
            <Stack>
                <Stack
                    flexDirection='row'
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography
                        sx={{
                            color: 'white'
                        }}
                    >{`Building: `}</Typography>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <Select
                            onChange={handleBuildingChange}
                        >
                        {BUILDING_DATA_LIST
                            .map(({title, value}) => {
                                return (
                                    <MenuItem value={value}>{title}</MenuItem>
                                )
                            })
                        }
                    </Select>
                    </FormControl>
                </Stack>
                <Stack
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography
                        sx={{color: "white"}}
                    >
                        {`Keywords: `}
                    </Typography>
                    <TextField id="standard-basic" variant="standard" />
                </Stack>
                <Stack
                    flexDirection='row'
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography
                        sx={{
                            color: 'white'
                        }}
                    >{`Hashtags: `}</Typography>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <Select
                            onChange={handleBuildingChange}
                        >
                        {BUILDING_DATA_LIST
                            .map(({title, value}) => {
                                return (
                                    <MenuItem value={value}>{title}</MenuItem>
                                )
                            })
                        }
                    </Select>
                    </FormControl>
                </Stack>
            </Stack>
        </div>
    );
}

export default ReviewForm;
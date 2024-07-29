import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Chip, Fab, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { BUILDING_DATA_LIST } from '../../data';
import { useState } from "react";
import { isMobile } from 'react-device-detect';
import { useQuery } from "react-query";
import { useNavigate } from 'react-router-dom';
import { fetchAllReviews } from "../../apis/firebaseApis";
import { startTransition } from 'react';
import LikeCounter from '../LikeCounter/LikeCounter';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id, building, keywords, buildingId, likes, date) {
    return { id, building, keywords, buildingId, likes, date };
}

const ReviewTable = () => {
    const { data } = useQuery('allReviews', fetchAllReviews);
    const navigate = useNavigate();
    const [filterValue, setFilterValue] = useState("");

    const handleSelectChange = (e) => {
        setFilterValue(e.target.value);
    }

    const rows = data
        .map(({ id, buildingId, keywords, likes, date }) => {
            const building = BUILDING_DATA_LIST.find((b) => b.value === buildingId);
            return createData(id, building.title, keywords, buildingId, likes, date);
        })
        .sort((a, b) => {
            if (filterValue === "building") {
                const titleA = a.building.toUpperCase();
                const titleB = b.building.toUpperCase();
                if (titleA < titleB) {
                    return -1;
                }
                if (titleA > titleB) {
                    return 1;
                }
                return 0;
            } else {
                return new Date(b.date) - new Date(a.date);
            }
        });

    return (
        <TableContainer
            sx={{
                margin: "25px 0px",
                width: {
                    xs: "100vw",
                    md: "700px"
                }
            }}
            component={Paper}
        >
            <Fab
                sx={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px"
                }}
                size="medium"
                color="white"
                aria-label="add"
                onClick={() => { navigate('/review-form') }}
            >
                <AddIcon />
            </Fab>
            <Table
                aria-label="customized table"
                size={isMobile ? 'small' : 'medium'}
            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell
                            align="center"
                            sx={{
                                padding: {
                                    xs: "0px",
                                    md: "6px 16px"
                                }
                            }}
                        >
                            #
                        </StyledTableCell>
                        <StyledTableCell>Building</StyledTableCell>
                        <StyledTableCell align="left">Keywords</StyledTableCell>
                        <StyledTableCell
                            sx={{
                                padding: {
                                    xs: "0px",
                                    md: "6px 16px"
                                },
                                textAlign: {
                                    xs: "center",
                                    md: "left"
                                }
                            }}
                        >
                            View
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            <FormControl variant="standard" sx={{
                                minWidth: {
                                    xs: 60,
                                    md: 120
                                },
                                height: 0,
                                bottom: "14px",
                            }} size="small">
                                <InputLabel sx={{ color: "white", fontSize: "14px" }} id="demo-simple-select-standard-label">Filter</InputLabel>
                                <Select
                                    value={filterValue}
                                    label="Filter"
                                    onChange={handleSelectChange}
                                    sx={{
                                        fontSize: '13px',
                                        color: 'white',
                                        '.MuiSelect-select': {
                                            color: 'white',
                                        },
                                        '& .Mui-selected': {
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="building">Building</MenuItem>
                                </Select>
                            </FormControl>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .map((row, i) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell
                                    sx={{
                                        padding: "3px"
                                    }}
                                    size="small"
                                    align="left"
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            textAlign: "center"
                                        }}
                                    >
                                        {i + 1}
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        {row.building}
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Stack
                                        display="flex"
                                        flexWrap="wrap"
                                        maxWidth="400px"
                                        gap="5px"
                                        flexDirection="row"
                                        minWidth="50px"
                                    >
                                        {
                                            row.keywords.map((e, i) => (
                                                <Chip
                                                    size='small'
                                                    label={e}
                                                    key={i}
                                                    color="secondary"
                                                />
                                            ))
                                        }
                                    </Stack>
                                </StyledTableCell>
                                <StyledTableCell
                                    sx={{
                                        padding: "0px"
                                    }}
                                    align="center"
                                >
                                    <Button
                                        sx={{
                                            fontSize: "10px",
                                            minWidth: "5px"
                                        }}
                                        size='small'
                                        variant="outlined"
                                        onClick={() => {
                                            startTransition(() => {
                                                navigate(`/review/${row.id}`)
                                            })

                                        }}
                                    >
                                        More
                                    </Button>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        gap="5px"
                                    >
                                        <LikeCounter reviewId={row.id} buildingId={row.buildingId} likes={row.likes} />
                                    </Stack>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ReviewTable;

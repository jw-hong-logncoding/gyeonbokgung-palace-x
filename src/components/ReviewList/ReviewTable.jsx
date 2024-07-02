import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, Chip, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
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
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id, building, keywords, likes, buildingId) {
    return {id, building, keywords, likes, buildingId };
}


const ReviewTable = () => {
    const { data } = useQuery('allReviews', fetchAllReviews);
    console.log(data);
    const navigate = useNavigate();
    const [filterValue, setFilterValue] = useState("");

    const handleSelectChange = (e) => {
        setFilterValue(e.target.value);
    }
    const rows = data
        .map(({id, buildingId, keywords, likes}) => {
            const building = BUILDING_DATA_LIST.find((b) => b.value === buildingId);
            const likesCount = Object.keys(likes).length;
            return createData(id, building.title, keywords, likesCount, buildingId);
        })
        .sort((a, b) => {
            if (filterValue !== "building"){
                return 0;
            }
            const titleA = a.building.toUpperCase();
            const titleB = b.building.toUpperCase();
            if (titleA < titleB) {
              return -1;
            }
            if (titleA > titleB) {
              return 1;
            }
            return 0;
        });


    return (
      <TableContainer
        sx={{
            width: {
                xs: "100vw",
                md: "700px"
            }
        }}
        component={Paper}
        >
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
                    <InputLabel sx={{color: "white", fontSize: "14px"}} id="demo-simple-select-standard-label">Filter</InputLabel>
                    <Select
                            value={filterValue}
                            label="Filter"
                            onChange={handleSelectChange}
                            sx={{
                                fontSize: '13px',
                                color: 'white', // 선택된 텍스트의 색상을 빨간색으로 설정
                                '.MuiSelect-select': {
                                  color: 'white', // 선택된 텍스트의 색상을 빨간색으로 설정
                                },
                                '& .Mui-selected': {
                                  color: 'white', // 선택된 항목의 텍스트 색상을 파란색으로 설정
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
                        <LikeCounter reviewId={row.id} buildingId={row.buildingId}  />
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
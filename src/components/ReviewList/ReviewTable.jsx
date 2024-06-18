import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button, Chip, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { BUILDING_DATA_LIST } from '../../data';
import { useState } from "react";
import { isMobile } from 'react-device-detect';

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

function createData(id, building, keywords,  likes) {
    return {id, building, keywords, likes };
}


const ReviewTable = () => {
    const [filterValue, setFilterValue] = useState("");

    const handleSelectChange = (e) => {
        setFilterValue(e.target.value);
    }
    const rows = BUILDING_DATA_LIST
        .map(({title}) => {
            return createData("ID", title, ["Pond", "Temp"], 24);
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
              <StyledTableRow key={row.building}>
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
                        <Typography>
                            {`${row.likes}`}
                        </Typography>
                        <Typography
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "contents",
                                }
                            }}
                        >
                            likes
                        </Typography>
                        <FavoriteIcon sx={{width: "17px"}} />
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
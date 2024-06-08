import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { BUILDING_DATA_LIST } from '../../data';
import { useState } from "react";

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
      <TableContainer component={Paper}>
        <Table
            sx={{maxWidth: "800px"}}
            aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Building</StyledTableCell>
              <StyledTableCell align="left">Keywords</StyledTableCell>
              <StyledTableCell align="left">View</StyledTableCell>
              <StyledTableCell align="left">
                <FormControl variant="standard" sx={{ minWidth: 120, height: 0, bottom: "12px" }} size="small">
                    <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
                    <Select
                            value={filterValue}
                            label="Filter"
                            onChange={handleSelectChange}
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
                <StyledTableCell align="left">{i + 1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.building}
                </StyledTableCell>
                <StyledTableCell align="left">
                    <Stack
                        display="flex"
                        flexDirection="row"
                        gap="5px"
                    >
                    {
                        row.keywords.map((e, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: "inline-block",
                                    backgroundColor: "secondary.main",
                                    fontSize: "12px",
                                    padding: "5px 10px 5px 10px",
                                    borderRadius: "15px",
                                    color: "white"
                                }}
                            >
                                {e}
                            </Box>
                        ))
                    }
                    </Stack>
                </StyledTableCell>
                <StyledTableCell align="left">
                    <Button
                        variant="outlined"
                    >
                        More
                    </Button>
                </StyledTableCell>
                <StyledTableCell align="left">
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap="2px"
                    >
                        {`${row.likes} likes`}
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
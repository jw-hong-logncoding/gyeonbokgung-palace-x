import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import { BUILDING_DATA_LIST } from '../../data';
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

function createData(id, building, date,  likes) {
    return {id, building, date, likes };
}


const MyReview = () => {
    const rows = BUILDING_DATA_LIST
        .map(({title, date="06-18-2024"}) => {
            return createData("ID", title, date, 24);
        });

    return (
        <Box
            display="inline-block"
        >
            <Box
                marginTop="20px"
                marginBottom="5px"
                marginLeft="5px"
            >
                <Typography
                    sx={{
                        fontSize: "32px"                        
                    }}
                >
                    My Review
                </Typography>
            </Box>
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
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell
                    sx={{
                        padding: {
                            xs: "0px",
                            md: "0px"
                        },
                        textAlign: {
                            xs: "center",
                            md: "left"
                        }
                    }}
                >
                    View
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
                <StyledTableCell component="th" scope="row">
                    <Typography
                        sx={{
                            fontSize: "12px",
                        }}
                    >
                        {row.date}
                    </Typography>
                </StyledTableCell>
                <StyledTableCell
                    sx={{
                        padding: "0px",
                    }}
                    align='left'
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
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Box>
    );
}

export default MyReview;
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
import { useNavigate } from 'react-router-dom';
import { useQuery } from "react-query";
import { fetchMyReviewsByUserId } from "../../apis/firebaseApis";
import { formatDate } from '../../functions/stringFunctions';

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
    const { data } = useQuery('reviews', fetchMyReviewsByUserId);
    console.log(data);
    const navigate = useNavigate();
    const rows = data.map(({ id, buildingId, date, likes }) => {
        const building = BUILDING_DATA_LIST.find((b) => b.value === buildingId);
        const likesCount = Object.keys(likes).length;
        return createData(id, building.title, formatDate(new Date(date)), likesCount);
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
                md: "500px"
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
              <StyledTableRow key={i}>
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
                        onClick={() => {navigate(`/review/${row.id}`)}}
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
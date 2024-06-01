import { Outlet } from "react-router-dom";
import NavBar from "../../NavBar";
import { Box } from "@mui/material";

const NavBarLayout = () => {
  return (
    <>
        <NavBar />
        <Box
          sx={{marginTop: '48px'}}
        >
          <Outlet />
        </Box>
    </>
  )
}

export default NavBarLayout;
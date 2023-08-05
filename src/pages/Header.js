import { Box, Select, MenuItem, InputLabel } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/UserSlice";
const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box
      height="70px"
      backgroundColor="#020d47"
      padding="0 20px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        fontSize="20px"
        color="#fff"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
      >
        TO DO Application
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <img
          src={`${process.env.REACT_APP_SERVER_URL}/assets/${user.picturePath}`}
          width="35px"
          height="35px"
          style={{ borderRadius: "50%", objectFit: "cover" }}
          alt={user.name}
        />
        <Select
          sx={{
            boxShadow: "none",
            color: "white",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
          value={user.name}
        >
          <MenuItem value={user.name}>{user.name}</MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(setLogout());
              navigate("/");
            }}
          >
            Logout
          </MenuItem>
        </Select>
      </Box>
    </Box>
  );
};
export default Header;

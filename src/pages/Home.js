import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/TaskSlice";
import Header from "./Header";
import { Link } from "react-router-dom";
import Task from "../components/Task";
import Stack from "@mui/material/Stack";
const Home = () => {
  const dispatch = useDispatch();
  const [typeFilter, setTypeFilter] = useState("");
  const [dayFilter, setDayFilter] = useState("");
  const types = ["default", "personal", "shopping", "wishlist", "work"];
  const days = [
    { label: "Today", value: "today" },
    { label: "Last seven", value: "seven" },
    { label: "Last Thirty", value: "thirty" },
  ];

  const addTaskLinkStyle = {
    height: "100%", // Set the height to take the whole height of the parent
    fontSize: "20px",
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    backgroundColor: "#030a0b",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: "55px",
    padding: "10px 20px", // Adjust padding to fit the content
    display: "inline-flex", // Display the Link as an inline-flex element
    alignItems: "center", // Center the content vertically
  };

  useEffect(() => {
    axios.get(`/task?type=${typeFilter}&day=${dayFilter}`).then((res) => {
      dispatch(setTasks(res.data.tasks));
    });
  }, [typeFilter, dayFilter]);
  const { tasks } = useSelector((state) => state.task);

  const handleTypeChange = (e) => {
    setTypeFilter(e.target.value);
  };
  return (
    <Box>
      <Header />
      <Container>
        <Box display="flex" justifyContent="space-between" mt="2rem">
          <FormControl style={{ minWidth: 150 }}>
            <InputLabel>Select Type</InputLabel>
            <Select value={typeFilter} onChange={handleTypeChange}>
              {types.map((type, idx) => (
                <MenuItem key={`${idx}-${type}`} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            <Link to="/task/create" style={addTaskLinkStyle}>
              Add Task
            </Link>
          </Box>
          <Stack direction="row" spacing={2}>
            {days.map((day, idx) => (
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor:
                    day.value === dayFilter ? "#2a89b2" : "#184356",
                  color: "white",
                }}
                key={`${idx}-${day.value}`}
                onClick={() => {
                  setDayFilter(day.value);
                }}
              >
                {day.label}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Button
            onClick={() => {
              setTypeFilter("");
              setDayFilter("");
            }}
          >
            Clear filters
          </Button>
        </Box>
        <Box mt="2rem">
          <Grid container spacing={2}>
            {tasks.map((task, idx) => (
              <Grid item xs={12} md={3} key={`${idx}-${task.id}`}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/task/${task._id}`}
                >
                  <Task task={task} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default Home;

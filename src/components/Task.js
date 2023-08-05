import {
  Card,
  Box,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from "@mui/material";

const cardContentStyles = {
  backgroundColor: "#f8f8f8",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
  borderRadius: "8px",
  padding: "16px",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
  },
};

const titleStyles = {
  color: "#214555",
  fontWeight: "bold",
};

const dateStyles = {
  marginBottom: "8px",
  color: "#666",
};

const typeStyles = {
  color: "#ff6f00",
  fontWeight: "bold",
  textTransform: "uppercase",
};

const statusStyles = {
  color: "#0d8523",
  fontWeight: "bold",
  textTransform: "uppercase",
};

const Task = ({ task }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card>
        <CardActionArea>
          <CardContent sx={cardContentStyles}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={titleStyles}
            >
              {task.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={dateStyles}>
              Date: {task.date.split("T")[0]}
            </Typography>
            <Typography sx={typeStyles}>{task.type}</Typography>
            <Typography sx={statusStyles}>{task.status}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
export default Task;

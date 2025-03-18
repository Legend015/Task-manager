import { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const TaskForm = ({ open, handleClose }) => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    console.log("New Task:", task);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ width: 400, p: 4, bgcolor: "white", mx: "auto", mt: "10%" }}>
        <Typography variant="h6">Create New Task</Typography>
        <TextField
          fullWidth
          label="Task Name"
          margin="normal"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add Task
        </Button>
      </Box>
    </Modal>
  );
};

export default TaskForm;

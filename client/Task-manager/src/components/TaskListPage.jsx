import { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import TaskTable from "../components/TaskTable";
import TaskForm from "../components/TaskForm";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Important Tasks
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Create Task
      </Button>
      <TaskTable tasks={tasks} />
      <TaskForm open={open} handleClose={() => setOpen(false)} />
    </Container>
  );
};

export default Tasks;

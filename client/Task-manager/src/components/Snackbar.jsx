import { Snackbar, Alert } from "@mui/material";

const SnackbarMessage = ({ open, message, onClose }) => (
  <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
    <Alert onClose={onClose} severity="success">
      {message}
    </Alert>
  </Snackbar>
);

export default SnackbarMessage;

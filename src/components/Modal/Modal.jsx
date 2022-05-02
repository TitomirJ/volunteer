import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import styles from "./modal.module.scss";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& > .MuiDialog-container > .MuiPaper-root": {
    "border-radius": "12px",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "300px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    width: "300px",
  },
}));

export const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 4,
            top: 4,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ title, body, handleClose, open }) {
  return (
    <div>
      <BootstrapDialog
        className={styles.modal}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          fontSize='24px'
          id='customized-dialog-title'
          onClose={handleClose}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography fontSize='18px' word-break='break-word' gutterBottom>
            {body}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

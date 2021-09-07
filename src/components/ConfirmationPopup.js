import React, { useState, setState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from 'prop-types'
import { withRouter } from "react-router";


function ConfirmationPopup(props) {

  const [open, setOpen] = useState(false);
  
  // const handleClickOpen = () => {
  //   setOpen(true );
  // };

  const handleClose = () => {
    //setOpen(false);
    props.ClosePopup()
  };

  const handleAgree = () => {
    props.onConfirm();
    handleClose();
  };
  const handleDisagree = () => {
    console.log("I do not agree.");
    handleClose();
  };

  useEffect(() => {
    setOpen(props.IsOpen);
}, [props])
  
    return (
      <div>
        {/* Button to trigger the opening of the dialog */}
        <Button onClick={console.log("handing was removed!")}>Open alert dialog</Button>
        {/* Dialog that is displayed if the state open is true */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Successful Alert"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.Message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDisagree} color="primary">
              Disagree
            </Button>
            <Button onClick={handleAgree} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  
}

export default withRouter(ConfirmationPopup);

ConfirmationPopup.propTypes = {
  Message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  IsOpen: PropTypes.bool.isRequired,
  ClosePopup: PropTypes.func.isRequired
}
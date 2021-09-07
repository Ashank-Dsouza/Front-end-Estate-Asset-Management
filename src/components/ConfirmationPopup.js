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

  const handleClose = () => {
    props.ClosePopup()
  };

  const handleAgree = () => {
    props.onConfirm();
    handleClose();
  };
  const handleDisagree = () => {
    handleClose();
  };

  useEffect(() => {
    setOpen(props.IsOpen);
}, [props])
  
    return (
      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirmation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.Message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDisagree} color="primary">
              Cancel  
            </Button>
            <Button onClick={handleAgree} color="primary" autoFocus>
              Yes
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
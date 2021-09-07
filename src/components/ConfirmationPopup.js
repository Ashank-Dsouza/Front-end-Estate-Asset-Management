import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from 'prop-types'


class ConfirmationPopup extends React.Component {
  
  constructor(props) {
    console.log("the props isOpen is: ", props.IsOpen);
    super(props)
    this.state = {
      open: props.IsOpen
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAgree = () => {
    this.props.onConfirm()
  };
  handleDisagree = () => {
    console.log("I do not agree.");
    this.handleClose();
  };

  shouldComponentUpdate(){
    return true;
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
    if(prevProps.IsOpen !== this.props.IsOpen) {
      this.setState({open: this.props.IsOpen});
    }
  }
  componentWillUpdate(prevProps) {
    console.log("componentWillUpdate");
    if(prevProps.IsOpen !== this.props.IsOpen) {
      this.setState({open: this.props.IsOpen});
    }
  }
  

  render() {
    return (
      <div>
        {/* Button to trigger the opening of the dialog */}
        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
        {/* Dialog that is displayed if the state open is true */}
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Successful Alert"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.props.Message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDisagree} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleAgree} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmationPopup;

ConfirmationPopup.propTypes = {
  Message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  IsOpen: PropTypes.bool.isRequired
}
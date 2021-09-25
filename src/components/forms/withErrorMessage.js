import ErrorMessage from "../ErrorMessage";
import { Box } from "@material-ui/core";
import Message from '../Message';
import React from "react";

const SubmitHandler = (OriginalComponent) => {

    return class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                errMsg: null,
                IsSuccess: false,
                SuccessMsg: null,
                SuccessMsgTitle: null
            }
        }


        handleError = (errorMessage) => {
            this.setState({ errMsg: errorMessage })
        }

        handleSuccess = (SuccessTitle, SuccessMsg) => {
            this.setState({IsSuccess: true});
            this.setState({SuccessMsgTitle: SuccessTitle})
            this.setState({SuccessMsg: SuccessMsg})
        }

        render() {
            const { IsSuccess, SuccessMsgTitle, SuccessMsg, errMsg } = this.state;
            return (
                <>
                {
                    IsSuccess ? 
                    (
                        <Message title={SuccessMsgTitle} message={SuccessMsg}></Message>
                    )
                    :
                    (
                        <Box>
                            <OriginalComponent {...this.props} handleSubmitSuccess={this.handleSuccess} handleSubmitError={this.handleError} />
                            <ErrorMessage message={errMsg}></ErrorMessage>
                        </Box>
                    )
                }

                </>
            )
        }

    }
}

export default SubmitHandler;
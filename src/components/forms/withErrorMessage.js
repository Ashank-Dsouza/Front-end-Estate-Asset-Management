import ErrorMessage from "../ErrorMessage";
import { useState } from 'react';
import { Box } from "@material-ui/core";

const ErrorHandler = (OriginalComponent) => {

    return function NewComponent() {
        const [errMsg, setErrMsg] = useState(null);

        const handleError = (errorMessage) => {
            setErrMsg(errorMessage)
        }

        return (
            <>
                <Box>
                <OriginalComponent handleSubmitError={handleError}/>
                <ErrorMessage message={errMsg}></ErrorMessage>
                </Box>
            </>
        )

    }
}

export default ErrorHandler;
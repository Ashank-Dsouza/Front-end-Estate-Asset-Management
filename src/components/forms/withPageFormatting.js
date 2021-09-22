import ErrorMessage from "../ErrorMessage";
import { useState } from 'react';
import { Box } from "@material-ui/core";
import FormPage from "./FormPage";

const FormatForm = (OriginalComponent) => {

    return function NewComponent() {

        return (
            <>
              <FormPage>
              <OriginalComponent></OriginalComponent>
              </FormPage>
            </>
        )

    }
}

export default FormatForm;
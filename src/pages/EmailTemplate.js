import React from "react";
import {
    Typography, Container, CssBaseline, Link, Box
} from "@material-ui/core";

import { green } from "@material-ui/core/colors";

export default function EmailTemplate(props) {

    return (
        <>
            <CssBaseline />
            <Container style={{ marginTop: 10 }} maxWidth='sm' component={Box} border={2} p={10} borderRadius={10}>
                <Typography variant='h2' align='center' style={{ color: green[700],marginBottom:40,fontSize:'4em' }}>Company Title</Typography>
                <Typography variant='h4' style={{marginBottom:20}}>Reset Password</Typography>
                <Typography style={{ marginBottom:40 }}>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras</Typography>
                <Link href={props.link} variant='button' color='primary'>Reset My Password</Link>
            </Container>
        </>
    );
}

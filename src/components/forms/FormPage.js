import {
    Grid,
    CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((them) => ({
    root: {
        height: "100vh",
        width: "100%",
    }
}));

function FormPage(props) {
    const classes = useStyle();

    return (
        <>
            <CssBaseline />
            <Grid
                container
                justifyContent="center"
                alignContent="center"
                className={classes.root}
            >
                <Grid item xs={12} md={6}>
                    {props.children}
                </Grid>
            </Grid>
        </>
    );
}

export default FormPage;


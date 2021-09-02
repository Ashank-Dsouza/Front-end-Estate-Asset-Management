import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types'
import Heading from "../components/Heading";
import NavBar from "../components/NavBar";

function Dashboard(props) {
 
    return (
        <>
            <NavBar></NavBar>
            <Heading Text={"Dashboard"}></Heading>
        </>
    )

}

export default Dashboard;


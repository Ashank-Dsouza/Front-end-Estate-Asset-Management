import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types'
import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import {
    Container
}
    from "@material-ui/core";   

function Dashboard(props) {
 
    return (
        <>
            <NavBar></NavBar>
            <Container style={{ marginTop: 20 }}>

            <Heading Text={"Dashboard"}></Heading>
            </Container>
        </>
    )

}

export default Dashboard;


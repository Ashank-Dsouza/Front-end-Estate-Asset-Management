import PropTypes from 'prop-types'
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import { GetDeviceId } from "../utility/ApiHelperFunctions";
import { PostWithAuth } from "../apis/api-controller";
import { RoutePath } from "../constants/routes";

function LogoutButton(props) {

    function clearLoginToken(params) {
        console.log("removing token.... logging out.....");
        sessionStorage.removeItem('userToken');
    }

    async function Logout() {
        const device_id = await GetDeviceId();
        PostWithAuth('/logout', {
            'device_id': device_id
        }).then(() => {
            clearLoginToken();
            props.history.push(RoutePath.LoginPage);
        }).catch((err) =>{
            clearLoginToken();
            props.history.push(RoutePath.LoginPage);
        })
    }

    return (
        <>
            <Button style={{textTransform: "none", fontSize: "16px"}} onClick={Logout}>  {props.children} </Button> 
        </>
    )

}

export default withRouter(LogoutButton);

LogoutButton.propTypes = {
    history: PropTypes.object.isRequired,
};
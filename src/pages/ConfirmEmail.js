import { Typography } from "@material-ui/core";
import { PostWithAuth, PutWithAuth } from "../apis/api-controller";
import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";


function ConfirmEmail(props) {

    const { confirmationToken } = useParams('blank');


    useEffect(() => {
        // This effect uses the `value` variable,
        // so it "depends on" `value`.
        console.log("the value is now: ");
        console.log(confirmationToken);
        PutWithAuth('/confirmEmail',{
            "confirmation_token": confirmationToken
        }).then((response) =>{
            console.log("the response is: ", response);
        }).catch((error) =>{
            console.log("api call failed with error: ", error);
        })
      }, [confirmationToken])

    return (
        <>
        <NavBar></NavBar> 
        <Heading Text={"Confirm Email"}></Heading>
        <div>   Confirmation Token: { confirmationToken }</div>
        </>
    )

}

export default ConfirmEmail;

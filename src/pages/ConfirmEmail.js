import { Typography } from "@material-ui/core";
import { PostWithAuth, Put } from "../apis/api-controller";
import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";


function ConfirmEmail(props) {

    const { confirmationToken: PIN } = useParams('blank');


    useEffect(() => {
        // This effect uses the `value` variable,
        // so it "depends on" `value`.
        console.log("the value is now: ");
        console.log(PIN);
        Put('/confirmEmail',{
            "confirmation_token": PIN
        }).then((response) =>{
            console.log("the response is: ", response);
        }).catch((error) =>{
            console.log("api call failed with error: ", error);
        })
      }, [PIN])

    return (
        <>
        <NavBar></NavBar> 
        <Heading >Confirm Email</Heading>
        <div>   Confirmation Token: { PIN }</div>
        </>
    )

}

export default ConfirmEmail;

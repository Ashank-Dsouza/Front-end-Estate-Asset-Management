import PropTypes from 'prop-types';
import {   
    IconButton,
TableRow, TableCell,  MenuItem, Select
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

import { DeleteWithAuth } from '../apis/api-controller';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';

function UserRow(props) {

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        props.onCheckBoxChange(props.UserData.id, event.target.checked);
    };

    const DeleteUser =  (event) => {
        const url = '/users/' + props.UserData.id;
        DeleteWithAuth(url)
            .then((response) =>{
                console.log("the user was deleted!");
                props.UpdateUsers()
            })
    }

    return (
        <>
            <TableRow>
                <TableCell>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                
                                name="checkedB"
                                color="primary"
                            />
                        }
                    />
                </TableCell>
                <TableCell>{props.UserData.username}</TableCell>
                <TableCell>{props.UserData.email}</TableCell>
                <TableCell>
                    <IconButton  onClick={DeleteUser} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
                <TableCell> {props.UserData.role} </TableCell>
            </TableRow>
        </>
    )

}

export default UserRow;

UserRow.propTypes = {
    UserData: PropTypes.object.isRequired,
    onCheckBoxChange: PropTypes.func.isRequired,
    UpdateUsers: PropTypes.func.isRequired,
}
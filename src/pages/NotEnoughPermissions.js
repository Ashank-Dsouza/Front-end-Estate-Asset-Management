import PropTypes from 'prop-types'
import NavBar from '../components/NavBar';

export default function NotEnoughPermissions() {
    return (
        <>
         <NavBar/>
        <p>You don't have the permissions to access this.</p>
        </>
    )
}

NotEnoughPermissions.propTypes = {
    history: PropTypes.object.isRequired,
};
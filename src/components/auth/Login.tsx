import { Link } from "react-router-dom";
import { Link as MuiLink  } from '@mui/material';
import Auth from "./Auth";

const login = () => {
    return (
        <Auth submitLabel = {"Login"} onSubmit = {async () => { }}>
            <Link to="/signup" style={{ alignSelf: "center" }} >
                <MuiLink>Signup</MuiLink>
                </Link>
        </Auth>
    )
};

export default login;
import router from "../components/routes";
import client from "../constants/apollo-client";
import { authenticatedVars } from "../constants/authenticated";

const onLogout = () => {
    authenticatedVars( false );
    router.navigate( "/login" );
    client.resetStore();
};
export { onLogout };
import { useEffect } from "react";
import excludedRoutes from "../../constants/excluded-routes";
import { useGetCurrentUser } from "../../hooks/use-get-current.user";
import { authenticatedVars } from "../../constants/authenticated";

interface GuardProps {
    children: JSX.Element;
}

const Guard = ({children}: GuardProps) => {
    const { data: user } = useGetCurrentUser();
    
    useEffect( () => {
        if ( user ) {
            authenticatedVars( true );
        }
    }, [user] );

    return (
        <>
            { excludedRoutes.includes(window.location.pathname) ? children : user && children }
        </>
    );
};

export default Guard;
import { useState } from "react";
import { API_URL } from "../constants/urls";
import client from "../constants/apollo-client";

interface LoginRequest {
    email: string;
    password: string;
}
const useLogin = () => {

    const [error, setError] = useState<string>('');
    
    const login = async ( loginRequest: LoginRequest ) => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( loginRequest )
        });

        if ( !response.ok ) {
            if (response.status === 401) {
                setError( 'Invalid credentials' );
                return;
            } else {
                setError( 'Unknown error, something went wrong.' );
                return;
            }
        }

        setError( '' );
        await client.refetchQueries( {
            include: ['active']
        } );
    };
    return { login, error };
}

export  { useLogin };

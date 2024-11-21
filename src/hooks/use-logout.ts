import { API_URL } from "../constants/urls";

const useLogout = () => {
    const logout = async () =>{
        try {
            const response = await fetch(`${API_URL}/auth/logout`, {
                method: 'POST',
            });
        } catch (error) {
            console.error('Error during logout:', error);
        }
    }
    return (
        {logout}
    )
};
export { useLogout };
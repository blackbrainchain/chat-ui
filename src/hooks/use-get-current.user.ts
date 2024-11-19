import { gql, useQuery } from "@apollo/client";
import { User } from "../models/user";

const GET_CURRENT_USER = gql`
    query CurrentUser {
        currentUser {
            _id
            email
        }
    }
`;
const useGetCurrentUser = () => {

    return useQuery < { currentUser: User }>(GET_CURRENT_USER);
};

export { useGetCurrentUser };
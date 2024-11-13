import { gql, useMutation } from "@apollo/client";
import { User } from "../models/user";

interface CreateUserInput {
    createUserInput: {
        email: string;
        password: string;
    }
}

const CREATE_USER = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            _id
            email
        }
    }
`;

const UseCreateUser = () => {
    return useMutation<User, CreateUserInput>(CREATE_USER);
};

export { UseCreateUser };
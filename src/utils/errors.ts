
const extractErrorMessage = (error: any) => {

    const errorMessage = error.graphQLErrors[0]?.extensions?.originalError?.message;
    if (errorMessage === undefined) {
        return;
    }
    if (Array.isArray(errorMessage)) {
        return formatErrorMessage(errorMessage[0]);
    } else {
        return formatErrorMessage(errorMessage);
    }
};

const formatErrorMessage  = (errorMessage: string): string => {
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
}

export { extractErrorMessage };
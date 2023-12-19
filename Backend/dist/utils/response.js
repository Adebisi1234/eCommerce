export const formatResponse = (statusCode, message, data) => {
    if (data) {
        return {
            statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                message,
                data,
            }),
        };
    }
    else {
        return {
            statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                message,
            }),
        };
    }
};
export const SuccessResponse = (data) => {
    return formatResponse(200, "success", data);
};
export const ErrorResponse = (code = 404, error) => {
    if (Array.isArray(error)) {
        const errorObject = error[0].constraints;
        const errorMessage = errorObject[Object.keys(errorObject)[0]] || "Error Occurred";
        return formatResponse(code, errorMessage, error);
    }
    return formatResponse(code, `${error}`, error);
};

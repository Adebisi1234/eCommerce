/*

Response: {
  message: string;
  data: unknown;
  error: string | undefined
}
*/
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
export const ErrorResponse = (error, code = 404) => {
    if (error instanceof Error) {
        return formatResponse(code, error.message, error.cause);
    }
    return formatResponse(code, `${error}`, error);
};

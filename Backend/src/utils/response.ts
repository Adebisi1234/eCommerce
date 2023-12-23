/* 

Response: {
  message: string;
  data: unknown;
  error: string | undefined
}
*/

export const formatResponse = (
  statusCode: number,
  message: string,
  data: unknown
) => {
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
  } else {
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

export const SuccessResponse = (data: object) => {
  return formatResponse(200, "success", data);
};

export const ErrorResponse = (code = 404, error: unknown) => {
  if (Array.isArray(error)) {
    const errorObject = error[0].constraints;
    const errorMessage =
      errorObject[Object.keys(errorObject)[0]] || "Error Occurred";
    return formatResponse(code, errorMessage, error);
  }

  return formatResponse(code, `${error}`, error);
};

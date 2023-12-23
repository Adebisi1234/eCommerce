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

export const ErrorResponse = (error: unknown, code = 404) => {
  if (error instanceof Error) {
    return formatResponse(code, error.message, error.cause);
  }

  return formatResponse(code, `${error}`, error);
};

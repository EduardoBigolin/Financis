export interface HttpReturn {
  message: string;
  statusCode: number;
}

export class HttpResponse {
  static ok(message: string): HttpReturn {
    return {
      message: message,
      statusCode: 200,
    };
  }
  static badRequest(message: string): HttpReturn {
    return {
      message: message,
      statusCode: 400,
    };
  }
  static ServerError(): HttpReturn {
    return {
      message: "Internal server error",
      statusCode: 500,
    };
  }
}

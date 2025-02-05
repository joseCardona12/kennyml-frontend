export class UtilApplication {
  private protocol: string = "http";
  private host: string = "localhost";
  private port: string = "3001";
  private baseUrl: string = `${this.protocol}://${this.host}:${this.port}/api`;

  constructor(
    protocolClient?: string,
    hostClient?: string,
    portClient?: string,
    urlClient?: string
  ) {
    this.protocol = protocolClient || this.protocol;
    this.host = hostClient || this.host;
    this.baseUrl = urlClient || this.baseUrl;
    this.port = portClient || this.port;
  }

  private getHeaders(
    headers: Record<string, string> = {}
  ): Record<string, string> {
    return {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  private async managementError<T>(response: Response): Promise<T> {
    if (!response.ok) {
      return {
        message: "Opss. There is an Error with response",
        code: response.status,
      } as T;
    }
    return (await response.json()) as Promise<T>;
  }

  public async get<T>(path: string): Promise<T> {
    const headers: Record<string, string> = this.getHeaders();
    console.log(`${this.baseUrl}/${path}`);
    const response = await fetch(`${this.baseUrl}/${path}`, {
      headers,
      method: "GET",
    });
    return await this.managementError(response);
  }

  public async post<T, B>(path: string, body: B): Promise<T> {
    const headers: Record<string, string> = this.getHeaders();
    console.log("headers", `${this.baseUrl}/${path}`);
    const response = await fetch(`${this.baseUrl}/${path}`, {
      headers,
      method: "POST",
      body: JSON.stringify(body),
    });
    return await this.managementError(response);
  }
}

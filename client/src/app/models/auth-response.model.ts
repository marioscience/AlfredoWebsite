/* TODO: Refactor to ServerResponse, to send messages to all APIs. Add testing for gods sakes */

export class AuthResponse {

  private messages: string[] = [];

  constructor(public success: boolean, public errorMessages: string[]) {
  }

  decodeMessages(): string[] {

    this.errorMessages.forEach(error => {
      if (typeof error === "string") {
        this.messages.push(error);
      }

      if (error.hasOwnProperty("msg")) {
        this.messages.push(error["msg"]);
      }
    });

    return this.messages;
  }
}

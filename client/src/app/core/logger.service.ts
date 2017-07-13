import {Injectable} from "@angular/core";

@Injectable()
export class LoggerService {
  /* This service will be used instead of an exception service */
  /* which will be implemented later*/

  handleError(error): void {
    /* Do something with error later */

    if (error) {
      console.log("error occurred " + error);
    }
  }
}

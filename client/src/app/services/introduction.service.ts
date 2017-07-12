import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Introduction} from "../models/introduction.model";

import "rxjs/add/operator/toPromise";

@Injectable()
export class IntroductionService {
  // private header = new Headers({"Content-Type": "applications/json"});
  apiUrl = "api/introduction";

  constructor(private http: Http) {
  }

  getIntroduction(): Promise<Introduction> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as Introduction)
      .catch(this.handleError)
  }

  private handleError(error) {
    /* Do something with error later */

    if (error) {
      console.log("error occurred: ", error);
      throw error;
    }
  }
}

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ApiRootConstants} from "../core/app.constants";
import {Observable} from "rxjs/Observable";
import {AuthResponse} from "../models/auth-response.model";
import "rxjs/add/operator/toPromise";

// Temporary imports for testing:
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  isLoggedIn = false;

  register(username, email, password, passwordMatch): Observable<AuthResponse> {
    let body = {
      username: username,
      email: email,
      password: password,
      passwordMatch: passwordMatch
    };

    return this.http.post(ApiRootConstants.register, body)
      .map(response => {
        let responseJSON = JSON.parse(response["_body"]);
        let responseObj = new AuthResponse(responseJSON.success, responseJSON.errorMessages);
        return responseObj;
      });
  }

  authenticate(): Observable<AuthResponse> {
    let responseObservable = this.http.post(ApiRootConstants.authenticate, {})
      .map(response => {
        let loginResult = JSON.parse(response["_body"]);
        this.isLoggedIn = loginResult.success;
        let loginResultObj = new AuthResponse(loginResult.success, loginResult.errorMessages);
        return loginResultObj;
      });

    return responseObservable;
  }

  login(username, password): Observable<AuthResponse> {
    let body = {
      username: username,
      password: password
    };

    return this.http.post(ApiRootConstants.login, body)
      .map(response => {
        let loginResult = JSON.parse(response["_body"]);
        let loginResultObj = new AuthResponse(loginResult.success, loginResult.errorMessages);
        this.isLoggedIn = JSON.parse(response["_body"]).success;

        return loginResultObj;
      });
  }

  logout(): void {
    this.http.get(ApiRootConstants.logout)
      .toPromise()
      .then((errors) => {
        console.log(errors);
        this.isLoggedIn = false;
      });
  }
}

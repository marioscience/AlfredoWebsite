import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiRootConstants} from "../core/app.constants";
import {Observable} from "rxjs/Observable";
import {AuthResponse} from "../models/auth-response.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
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
        return new AuthResponse(responseJSON.success, responseJSON.errorMessages);
      });
  }

  authenticate(): Observable<AuthResponse> {
    return this.http.post(ApiRootConstants.authenticate, {})
      .map(response => {
        let loginResult = JSON.parse(response["_body"]);
        this.isLoggedIn = loginResult.success;
        return new AuthResponse(loginResult.success, loginResult.errorMessages);
      });
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
        if (errors) {
          console.log(errors);
        }
        this.isLoggedIn = false;
      });
  }
}

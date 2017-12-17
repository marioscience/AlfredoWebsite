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

    return this.http.post<AuthResponse>(ApiRootConstants.register, body)
      .map(response => {
        return new AuthResponse(response.success, response.errorMessages);
      });
  }

  authenticate(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(ApiRootConstants.authenticate, {})
      .map(response => {
        this.isLoggedIn = response.success;
        return new AuthResponse(response.success, response.errorMessages);
      });
  }

  login(username, password): Observable<AuthResponse> {
    let body = {
      username: username,
      password: password
    };

    return this.http.post<AuthResponse>(ApiRootConstants.login, body)
      .map(response => {
        let loginResultObj = new AuthResponse(response.success, response.errorMessages);
        this.isLoggedIn = response.success;

        return loginResultObj;
      });
  }

  logout(): void {
    this.http.get<AuthResponse>(ApiRootConstants.logout)
      .toPromise()
      .then((response) => {
        if (!response.success) {
          console.log(response.errorMessages);
        }
        this.isLoggedIn = false;
      });
  }
}

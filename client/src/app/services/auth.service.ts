import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ApiRootConstants} from "../core/app.constants";
import {Observable} from "rxjs/Observable";
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

  register(username, email, password, passwordMatch): void {
    let body = {
      username: username,
      email: email,
      password: password,
      passwordMatch: passwordMatch
    };

    this.http.post(ApiRootConstants.register, body)
      .toPromise()
      .then((errors) => {
        console.log(errors)
      });
  }

  login(username, password): Observable<any> {
    //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);

    let body = {
      username: username,
      password: password
    };

    return this.http.post(ApiRootConstants.login, body)
      .map(response => {
        this.isLoggedIn = JSON.parse(response["_body"]).success;
        return JSON.parse(response["_body"]).errorMessages;
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

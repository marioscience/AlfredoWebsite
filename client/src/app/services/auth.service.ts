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

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ApiRootConstants} from "../core/app.constants";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

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

  login(): void {

  }
}

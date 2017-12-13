import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  messages: Array<string> = [];

  constructor(public authService: AuthService, public router: Router) {
  }

  login(username, password): void {
    console.log(username, password);
    this.authService.login(username, password).subscribe((message) => {
      this.messages = message;
      if (this.authService.isLoggedIn) {
        this.router.navigate(["/admin"]);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}

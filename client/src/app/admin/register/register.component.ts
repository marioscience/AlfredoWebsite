import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  constructor(private authService: AuthService) {
  }


  messages: Array<string> = [];
  showSuccessMsg: boolean = false;

  registerUser(username, email, password, passwordMatch): void {
    this.messages = [];

    this.authService.register(username, email, password, passwordMatch)
      .subscribe(response => {
        this.showSuccessMsg = response.success;
        this.messages = response.decodeMessages();
      });
  }
}

import {Injectable} from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot
} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log("AuthGuard#CanActivate called!");
    return this.checkLogin();
  }

  checkLogin(): boolean {
    console.log(this.authService.isLoggedIn);

    if (this.authService.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/admin/login']);
    return false;
  }
}

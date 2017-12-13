import {Injectable} from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot
} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {

    return this.authService.authenticate()
      .map(res => {
        if (!res.success) {
          this.router.navigate(['/admin/login']);
        }

        return res.success;
      });
  }
}

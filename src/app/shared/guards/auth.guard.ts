import {inject, Injectable} from '@angular/core';
import {DatabaseHelperService} from "../../data/services/database-helper.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private databaseHelper: DatabaseHelperService) {

  }

  canActivate() {
    const router: Router = inject(Router);
    if (this.databaseHelper.isAuth) {
      console.log(this.databaseHelper.isAuth)
      return true
    }
    router.navigate(['auth/sign-in']).then(r => r)
    return false
  }
}

import {Component} from '@angular/core';
import {DatabaseHelperService} from "./data/services/database-helper.service";
import {ActivatedRoute, NavigationExtras, Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private route: Router, private databaseHelper: DatabaseHelperService) {
    this.databaseHelper = new DatabaseHelperService()
    if (!this.databaseHelper.isAuth) {
      this.route.navigate(['auth/sign-in']).then(r => r)
    }
    this.route.navigate(['menu']).then(r => r)
  }
}

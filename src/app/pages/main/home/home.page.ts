import {Component} from '@angular/core';
import {Story} from "../../../data/model/Story";
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listOfStories: Story[] = []

  constructor(private router: Router, private dbHelper: DatabaseHelperService) {
  }

  ngOnInit() {
    this.listOfStories = this.dbHelper.listOfStory
  }

  navigateToDetail(id: number) {
    this.router.navigate([`menu/detail/${id}`])
  }

}

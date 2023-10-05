import {Component} from '@angular/core';
import {Story} from "../../data/model/Story";
import {DatabaseHelperService} from "../../data/services/database-helper.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listOfStories: Story[] = []

  constructor(private dbHelper: DatabaseHelperService) {
  }

  ngOnInit() {
    this.listOfStories = this.dbHelper.listOfStory
  }

}

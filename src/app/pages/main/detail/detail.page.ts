import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {NavController} from "@ionic/angular";
import {Story} from "../../../data/model/Story";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  storyId?: number | null
  storyData: Story
  addParagraph = ""

  constructor(private route: ActivatedRoute, private navController: NavController, private router: Router, private databaseHelper: DatabaseHelperService) {
    this.storyId = parseInt(this.route.snapshot.paramMap.get('id') ?? "0")
    this.storyData = this.databaseHelper.listOfStory[this.storyId]
    console.log(this.storyData.storyParagraph)
  }

  ngOnInit() {

  }

  onSubmitStory(){
    this.storyData.storyParagraph.push(this.addParagraph)
    this.addParagraph =""
  }

  onBackPressed() {
    this.navController.back()
  }

  protected readonly Component = Component;
  protected readonly document = document;
}

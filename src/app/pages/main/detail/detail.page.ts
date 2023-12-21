import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {NavController, ToastController} from "@ionic/angular";
import {ApiFactoryService} from "../../../data/services/api-factory.service";
import {catchError} from "rxjs";
import {Story} from "../../../data/model/Story";
import {StoryDetail} from "../../../data/model/StoryDetail";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  storyId?: number | null
  storyData: StoryDetail = {}
  addParagraph = ""

  constructor(private toastController: ToastController, private apiFactory: ApiFactoryService, private route: ActivatedRoute, private navController: NavController, private router: Router, private databaseHelper: DatabaseHelperService) {
    this.storyId = parseInt(this.route.snapshot.paramMap.get('id') ?? "0")
  }

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.apiFactory.getRequest(`api/cerbung/${this.storyId}`).subscribe((data) => {
      this.storyData = data.data
      this.storyData.cerbungStory = data.data.cerbung_story
      console.log(this.storyData.createdAt)
    })
  }

  convertDate(date: Date) {
    return date.toLocaleString()
  }

  onSubmitStep() {
    let bodyRequest = new Map<string, any>([
      ['paragraph', this.addParagraph],
      ['id_cerbung', this.storyId],
      ['id_users', localStorage.getItem(DatabaseHelperService.userid)],
    ])
    this.apiFactory.postRequest('api/cerbung/paragraph', bodyRequest).subscribe({
      next: (data) => {
        this.presentToast(data.message)
        this.addParagraph = ""
      },
      error: (err) => {
        this.presentToast(err.error.message)
      },
      complete: () => {
        this.fetchData()
      }
    })
  }

  onBackPressed() {
    this.navController.back()
  }

  navigateToEdit() {
    this.router.navigate([`menu/edit-data/${this.storyId}`])
  }

  addFavorite() {
    let bodyRequest = new Map<string, any>([
      ['user_id', localStorage.getItem(DatabaseHelperService.userid)],
      ['cerbung_id', this.storyId],
    ])
    this.apiFactory.postRequest('api/user-following', bodyRequest).subscribe({
      next: (data) => {
        this.presentToast(data.message)
      },
      error: (err) => {
        this.presentToast(err.error.message)
      },
      complete: () => {
        return
      }
    })
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: "bottom",
    });

    await toast.present();
  }

  protected readonly Component = Component;
  protected readonly document = document;
}

import {Component} from '@angular/core';
import {Story} from "../../../data/model/Story";
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {AlertController, NavController} from "@ionic/angular";
import {ApiFactoryService} from "../../../data/services/api-factory.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  userStep = 1
  storyData: Story
  visibilityDesc = ""
  firstParagraph = ""
  agreementConfirmation = false
  validationMessage: string[] = []

  constructor(private apiRequest: ApiFactoryService, private dbHelper: DatabaseHelperService, private alertController: AlertController, private navController: NavController) {
    this.storyData = {}
  }

  onVisibilityChange() {
    if (this.storyData.visibility == 0) {
      this.visibilityDesc = "(Only approved user can contribute to story)"
    } else if (this.storyData.visibility == 1) {
      this.visibilityDesc = "(All user can contribute to story)"
    } else {
      this.visibilityDesc = ""
    }
  }

  async presentAlert(header: string, subHeader?: string, msg?: string) {
    const alert = await this.alertController.create({
      header: header ? header : "",
      subHeader: subHeader ? subHeader : "",
      message: msg ? msg : "",
      buttons: ['OK'],
    });
    await alert.present();
  }

  nextStep() {
    if (this.userStep == 3) {
      this.submitData()
      return
    }
    this.userStep++
    console.log(this.userStep)
  }

  prevStep() {
    if (this.userStep == 1) {
      return
    }
    this.userStep--
    console.log(this.userStep)
  }

  submitData() {
    if (this.validateData()) {
      this.apiRequest.postRequest('api/cerbung/add', new Map<String, any>([
        ['title', this.storyData.title],
        ['desc', this.storyData.desc],
        ['thumbnail', this.storyData.thumbnail],
        ['genre', this.storyData.genre],
        ['visibility', this.storyData.visibility],
        ['first_paragraph', this.firstParagraph],
        ['users_id', localStorage.getItem(DatabaseHelperService.userid)],
      ])).subscribe({
        next: (data) => {
          this.presentAlert('Success', '', data.message)
          this.navController.navigateRoot("/").then(r => {})
        },
        error: (err) => {
          this.presentAlert('Error', '', err.error.message)
        },
        complete: () => {

        }
      })
    }
  }

  resetPage() {
    this.userStep = 1
    this.storyData = {}
    this.visibilityDesc = ""
    this.firstParagraph = ""
    this.agreementConfirmation = false
    this.validationMessage = []
  }

  validateData(): boolean {
    this.validationMessage = []
    if (this.storyData.title == null || this.storyData.title.length == 0) {
      this.validationMessage.push("Title required")
    }
    if (this.storyData.desc == null ||this.storyData.desc.length == 0) {
      this.validationMessage.push("Synopsis required")
    }
    if (this.storyData.thumbnail == null || this.storyData.thumbnail.length == 0) {
      this.validationMessage.push("Thumbnail link required")
    }
    if (this.storyData.genre == null||this.storyData.genre.length == 0) {
      this.validationMessage.push("Genre required")
    }
    if (this.storyData.visibility == null) {
      this.validationMessage.push("Story visibility required")
    }
    if (this.firstParagraph.length == 0) {
      this.validationMessage.push("Story first paragraph required")
    }
    if (!this.agreementConfirmation) {
      this.validationMessage.push("Agreement confirmation required")
    }
    if (this.validationMessage.length > 0) {
      this.validationMessage.push("Go to previous step to fix the required data")
    }
    return this.validationMessage.length == 0;
  }

}

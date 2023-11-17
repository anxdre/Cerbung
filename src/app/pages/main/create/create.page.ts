import {Component, OnInit} from '@angular/core';
import {Story} from "../../../data/model/Story";
import {using} from "rxjs";
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {reload} from "ionicons/icons";
import {AlertController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage{
  userStep = 1
  storyData: Story
  visibilityDesc = ""
  storyFirstParagarph = ""
  agreementConfirmation = false
  validationMessage: string[] = []

  constructor(private dbHelper: DatabaseHelperService, private alertController: AlertController, private navController: NavController) {
    this.storyData = new Story()
  }

  onVisibilityChange() {
    if (this.storyData.storyVisibility == "restricted") {
      this.visibilityDesc = "(Only approved user can contribute to story)"
    } else if (this.storyData.storyVisibility == "public") {
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
      // this.storyData.storyParagraph.push(this.storyFirstParagarph)
      // this.dbHelper.listOfStory.push(
      //   this.storyData
      // )
      // this.presentAlert("Yeay!", "Create story success", "Story now will show up at home page section").then(r => {})
      // this.resetPage()
      // this.navController.navigateRoot("/").then(r => {})
    }
  }

  resetPage() {
    this.userStep = 1
    this.storyData = new Story()
    this.visibilityDesc = ""
    this.storyFirstParagarph = ""
    this.agreementConfirmation = false
    this.validationMessage = []
  }

  validateData(): boolean {
    this.validationMessage = []
    if (this.storyData.storyTitle.length == 0) {
      this.validationMessage.push("Title required")
    }
    if (this.storyData.storyDescription.length == 0) {
      this.validationMessage.push("Synopsis required")
    }
    if (this.storyData.storyThumbnail.length == 0) {
      this.validationMessage.push("Thumbnail link required")
    }
    if (this.storyData.storyGenre.length == 0) {
      this.validationMessage.push("Genre required")
    }
    if (this.storyData.storyVisibility.length == 0) {
      this.validationMessage.push("Story visibility required")
    }
    if (this.storyFirstParagarph.length == 0) {
      this.validationMessage.push("Story first paragraph required")
    }
    if (!this.agreementConfirmation) {
      this.validationMessage.push("Agreement confirmation required")
    }
    if (this.validationMessage.length > 0){
      this.validationMessage.push("Go to previous step to fix the required data")
    }
    return this.validationMessage.length == 0;
  }

}

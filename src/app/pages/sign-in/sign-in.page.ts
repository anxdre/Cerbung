import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseHelperService} from "../../data/services/database-helper.service";
import {NavController, ToastController} from "@ionic/angular";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  username = ""
  password = ""
  validationMessage: string[] = []

  constructor(private router: Router, private navContorller: NavController, private databaseHelper: DatabaseHelperService, private toastController: ToastController) {
    if (this.databaseHelper.isAuth) {
      router.navigate(['main']).then(r => this.router.dispose())
    }
  }

  signIn() {
    if (this.validateData()) {
      let result = this.databaseHelper.listOfUser.find(userData =>
        userData.username == this.username && userData.password == this.password)

      if (result != null) {
        this.presentToast(`Welcome ${result.username}`)
        this.databaseHelper.isAuth = true
        return this.router.navigate(['menu'])
      }
      this.presentToast('Username or Password is wrong')
    }
  }

  navigateToSignUp() {
    this.router.navigate(['auth/sign-up'])
  }


  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: "bottom",
    });

    await toast.present();
  }

  validateData() {
    this.validationMessage = []
    if (this.username == '') {
      this.validationMessage.push("Username belum terisi")
    }
    if (this.username == ' ') {
      this.validationMessage.push("Username belum terisi")
    }
    if (this.password == '') {
      this.validationMessage.push("Password belum terisi")
    }
    if (this.password == ' ') {
      this.validationMessage.push("Password belum terisi")
    }
    return this.validationMessage.length == 0;
  }

  ngOnInit(): void {
  }
}

import {Component} from '@angular/core';
import {NavController, ToastController} from "@ionic/angular";
import {DatabaseHelperService} from "../../data/services/database-helper.service";
import {User} from "../../data/model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  username = ""
  password = ""
  validationMessage: string[] = []

  constructor(private router: Router, private databaseHelper: DatabaseHelperService, private navController: NavController, private toastController: ToastController) {
    if (this.databaseHelper.isAuth) {
      router.navigate(['menu']).then(r => this.router.dispose())
    }
  }

  signUp() {
    if (this.validateData()) {
      this.databaseHelper.listOfUser.push(
        new User(this.username, this.password)
      )
      this.presentToast('Sign Up Success')
      this.router.navigate(['/signIn'])
      return
    }
    this.presentToast('Sign Up Failed')
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
    if (this.password.length < 6) {
      this.validationMessage.push("Password minimal 6 karakter")
    }
    return this.validationMessage.length == 0;
  }

  onBackPressed() {
    this.navController.back()
  }
}

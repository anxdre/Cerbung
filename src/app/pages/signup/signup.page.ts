import {Component} from '@angular/core';
import {NavController, ToastController} from "@ionic/angular";
import {DatabaseHelperService} from "../../data/services/database-helper.service";
import {Router} from "@angular/router";
import {ApiFactoryService} from "../../data/services/api-factory.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  fullName = ""
  email = ""
  password = ""
  validationMessage: string[] = []

  constructor(private apiFactory:ApiFactoryService,private router: Router, private databaseHelper: DatabaseHelperService, private navController: NavController, private toastController: ToastController) {
    if (this.databaseHelper.isAuth) {
      router.navigate(['menu']).then(r => this.router.dispose())
    }
  }

  signUp() {
    if (this.validateData()) {
      this.apiFactory.postRequest('api/auth/register', new Map<string, any>([
        ['name', this.fullName],
        ['email', this.email],
        ['password', this.password]
      ])).subscribe({
        next: (data) => {
          this.presentToast(`User ${data.name} succesfully registered`)
          this.onBackPressed()
        },
        error: (e) => {
          this.presentToast("User failed to register")
        },
        complete: () => {
          return
        }
      })
    }
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

    if (this.fullName == '') {
      this.validationMessage.push("Nama belum terisi")
    }
    if (this.fullName == ' ') {
      this.validationMessage.push("Nsername belum terisi")
    }
    if (this.email == '') {
      this.validationMessage.push("Email belum terisi")
    }
    if (this.email == ' ') {
      this.validationMessage.push("Email belum terisi")
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

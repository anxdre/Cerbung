import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseHelperService} from "../../data/services/database-helper.service";
import {NavController, ToastController} from "@ionic/angular";
import {ApiFactoryService} from "../../data/services/api-factory.service";
import {User} from "../../data/model/User";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  email = ""
  password = ""
  validationMessage: string[] = []

  constructor(private apiFactory: ApiFactoryService, private router: Router, private navContorller: NavController, private databaseHelper: DatabaseHelperService, private toastController: ToastController) {
    if (this.databaseHelper.isAuth) {
      router.navigate(['main']).then(r => this.router.dispose())
    }
  }

  signIn() {
    let user: User
    if (this.validateData()) {
      this.apiFactory.postRequest('api/auth/login', new Map<string, any>([
        ['email', this.email],
        ['password', this.password]
      ])).subscribe((data) => {
        user = data.user
        localStorage.setItem(DatabaseHelperService.userEmailKey, user.email!!)
        localStorage.setItem(DatabaseHelperService.userNameKey, user.name!!)
        this.databaseHelper.isAuth = true
        this.router.navigateByUrl('menu/tab/home')
      }, () => {
        this.presentToast("Account Not Found")
      }, () => {
        return
      })
    }
  }

  navigateToSignUp() {
    this.router.navigate(['auth/sign-up'])
  }

  navigateToMain() {
    this.router.navigate(['main']).then(r => this.router.dispose())
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
    if (this.email == '') {
      this.validationMessage.push("Username belum terisi")
    }
    if (this.email == ' ') {
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

import {Component} from '@angular/core';
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {Router} from "@angular/router";
import {ApiFactoryService} from "../../../data/services/api-factory.service";
import {ToastController} from "@ionic/angular";
import {Story} from "../../../data/model/Story";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  apiMessage: string = ''
  listOfStory : Story[] = []

  constructor(private router: Router, private dbHelper: DatabaseHelperService, private apiFactory:ApiFactoryService,private toastController: ToastController) {
  }
  ngOnInit() {
    this.fetchData()
  }

  private fetchData(){
    this.apiFactory.getRequest('api/cerbung').subscribe({
      next: (data) => {
        this.listOfStory = data.data
        console.log(data)
      },
      error: (e) => {
        this.presentToast(e.error.message)
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
  navigateToDetail(id: number) {
    this.router.navigate([`menu/detail/${id}`])
  }

}

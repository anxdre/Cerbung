import {Component, OnInit} from '@angular/core';
import {ApiFactoryService} from "../../../data/services/api-factory.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NavController} from "@ionic/angular";
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {catchError} from "rxjs";

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.page.html',
  styleUrls: ['./edit-data.page.scss'],
})
export class EditDataPage implements OnInit {
  validationMessage: string[] = []
  name: string = ''
  imgUrl: string = ''
  description: string = ''
  price: string = ''
  pastaId: number

  constructor(private apiFactory: ApiFactoryService, private route: ActivatedRoute, private navController: NavController, private router: Router, private databaseHelper: DatabaseHelperService) {
    this.pastaId = parseInt(this.route.snapshot.paramMap.get('id') ?? "0")
  }

  ngOnInit() {
    this.apiFactory.getRequest(`api/pasta/${this.pastaId}`).subscribe((data) => {

    })
  }

  saveData() {
    if (this.validateData()) {
      // let bodyMap = new FormData()
      //   bodyMap.append('id', this.pastaId.toString())
      //   bodyMap.append('name', this.name)
      //   bodyMap.append('url', this.imgUrl)
      //   bodyMap.append('description', this.description)
      //   bodyMap.append('price', this.price)
      let bodyMap = new Map<String, any>([
        ['id', this.pastaId],
        ['name', this.name],
        ['url', this.imgUrl],
        ['description', this.description],
        ['price', this.price],
      ])
      console.log(bodyMap)
      this.apiFactory.postRequest('api/pasta/update', bodyMap).pipe(catchError(err => {
        this.validationMessage.push(err.error.message)
        console.log(err)
        throw err.message
      })).subscribe((response) => {
        this.validationMessage.push(response.message)
        console.log(response)
      })
    }
  }

  validateData(): boolean {
    this.validationMessage = []
    if (this.name.length == 0) {
      this.validationMessage.push("Title required")
    }
    if (this.imgUrl.length == 0) {
      this.validationMessage.push("Image url required")
    }
    if (this.description.length == 0) {
      this.validationMessage.push("Description required")
    }
    if (this.price.length == 0) {
      this.validationMessage.push("Price required")
    }
    return this.validationMessage.length == 0
  }

  onBackPressed() {
    this.navController.back()
  }
}

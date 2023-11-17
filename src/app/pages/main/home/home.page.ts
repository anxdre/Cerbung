import {Component} from '@angular/core';
import {DatabaseHelperService} from "../../../data/services/database-helper.service";
import {Router} from "@angular/router";
import {ApiFactoryService} from "../../../data/services/api-factory.service";
import {Pasta} from "../../../data/model/Pasta";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listOfPasta: Pasta[] = []
  apiMessage: string = ''

  constructor(private router: Router, private dbHelper: DatabaseHelperService, private apiFactory:ApiFactoryService) {
  }
  ngOnInit() {
    this.apiFactory.getRequest('api/pasta/all').subscribe((data)=>{
      this.apiMessage = data.message
      this.listOfPasta = data.data
      console.log(data)
      console.log(this.listOfPasta)
    })
  }

  navigateToDetail(id: number) {
    this.router.navigate([`menu/detail/${id}`])
  }

}

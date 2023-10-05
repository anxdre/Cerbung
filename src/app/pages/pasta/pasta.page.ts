import {Component, OnInit} from '@angular/core';
import {PastaServiceService} from "../../data/services/pasta-service.service";


@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
})

export class PastaPage implements OnInit {

  selectedView = 0
  listOfPasta?:{name:string,url:string,description:string,price:number,spice:boolean}[];


  constructor(private pastaService:PastaServiceService) {

  }

  ngOnInit() {
    this.listOfPasta = this.pastaService.listOfPasta
  }

  onChangeSelected(position: number) {
    console.log(position)
    if (position == 0) {

    } else if (position == 1) {

    } else if (position == 2) {

    } else {
      console.log("un-indexed")
    }
  }

}

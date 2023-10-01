import {Component, OnInit} from '@angular/core';
import {Product} from "../../data/model/Product";
import * as jsonData from '../../../assets/item.json';
import {add} from "ionicons/icons";


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  items: Product[] = [];
  promoCode: string = "qwerty"
  enteredPromo: string = ""
  showedMessage = ""
  messageStatus = ""

  constructor() {
    for (const data of this.parseJsonData()) {
      this.items.push(new Product(data.title, data.price, data.description))
    }
  }

  submitCode(code: string):Boolean {
    if (code == this.promoCode) {
      this.changeDataSet(35)
      this.addMessage("Anda mendapat diskon 35%",true)
      this.enteredPromo = ""
      return true
    }
    this.changeDataSet(0)
    this.addMessage("Kode tidak ditemukan",false)
    this.enteredPromo = ""
    return false
  }

  changeDataSet(promo: number) {
    for (let item of this.items) {
      item.discount = promo
      item.discountedPrice = item.price * (promo / 100)
    }
  }

  addMessage(text:string,status?:boolean){
    this.showedMessage = text
    if (status){
      this.messageStatus = 'green'
      return
    }
    this.messageStatus = 'red'
  }

  private parseJsonData() {
    let parsedData: { title: string, price: number, description: string }[] = jsonData
    console.log(JSON.parse(JSON.stringify(parsedData)));
    return JSON.parse(JSON.stringify(parsedData)).default
  }

  ngOnInit() {
  }

}

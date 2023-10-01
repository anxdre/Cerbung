import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
})

export class PastaPage implements OnInit {

  selectedView = 0
  listOfPasta = [
    {
      name: "SALMON AGLIO OLIO",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/salmon-aglio-olio.png",
      description: "Pasta Spaghetti, Cabai, Paprika Hijau, Bawang Putih dengan Salmon Panggang",
      price: 52000
    },
    {
      name: "CLASSIC FETTUCCINE",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/Classic-Fettuccine-With-Crispy-Chicken.png",
      description: "Pasta Fettuccine, Daging Ayam Asap, Saus Creamy dengan Chicken Strip dibalur Cream Cheese Mayo dan Beef Bits.",
      price: 35000,
    },
    {
      name: "CHEESE LAVA",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/Cheese-Lava.png",
      description: "Pasta Fusilli, Pepperoni Sapi, Saus Keju Cheddar, Beef Bits dengan Saus Cheese Fondue",
      price: 38000,
    }, {
      name: "CREAMY TRUFFLE",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/CREAMY-TRUFFLE.png",
      description: "Pasta Penne, Sosis Beef Chorizo,Bayam, Saus Alfredo, dan Truffle Oil",
      price: 42000,
    }, {
      name: "SALMON MENTAIKO",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/CLASSIC-SALMON-MENTAIKO.png",
      description: "Pasta Spaghetti, Ikan Salmon Fillet, Saus Mayo Mentai, dan Nori.",
      price: 56000,
    },
  ];

  constructor() {
  }

  ngOnInit() {
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

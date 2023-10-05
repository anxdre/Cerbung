import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PastaServiceService {
  listOfPasta = [
    {
      name: "SALMON AGLIO OLIO",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/salmon-aglio-olio.png",
      description: "Pasta Spaghetti, Cabai, Paprika Hijau, Bawang Putih dengan Salmon Panggang",
      price: 52000,
      spice: true
    },
    {
      name: "CLASSIC FETTUCCINE",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/Classic-Fettuccine-With-Crispy-Chicken.png",
      description: "Pasta Fettuccine, Daging Ayam Asap, Saus Creamy dengan Chicken Strip dibalur Cream Cheese Mayo dan Beef Bits.",
      price: 35000,
      spice: false
    },
    {
      name: "CHEESE LAVA",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/Cheese-Lava.png",
      description: "Pasta Fusilli, Pepperoni Sapi, Saus Keju Cheddar, Beef Bits dengan Saus Cheese Fondue",
      price: 38000,
      spice: true
    }, {
      name: "CREAMY TRUFFLE",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/CREAMY-TRUFFLE.png",
      description: "Pasta Penne, Sosis Beef Chorizo,Bayam, Saus Alfredo, dan Truffle Oil",
      price: 42000,
      spice: false
    }, {
      name: "SALMON MENTAIKO",
      url: "https://www.pizzahut.co.id/assets/images/digital_menu/phr/menu/pasta-rice/CLASSIC-SALMON-MENTAIKO.png",
      description: "Pasta Spaghetti, Ikan Salmon Fillet, Saus Mayo Mentai, dan Nori.",
      price: 56000,
      spice: true
    }
  ]

  constructor() {
  }
}

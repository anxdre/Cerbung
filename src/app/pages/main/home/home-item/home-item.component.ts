import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss'],
})
export class HomeItemComponent  implements OnInit {
  @Input()title?:string = ""
  @Input()description?:string = ""
  @Input()imgUrl?:string = ""
  @Input()totalLike:number = 0
  @Input()totalPart:number = 0

  constructor() { }

  ngOnInit() {}

}

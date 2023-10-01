import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pasta-card-view-holder',
  templateUrl: './pasta-card-view-holder.component.html',
  styleUrls: ['./pasta-card-view-holder.component.scss'],
})
export class PastaCardViewHolderComponent implements OnInit {
  @Input({required: true}) title!: string
  imgUrl!: string
  description!: string

  constructor() {
  }

  ngOnInit() {
  }

}

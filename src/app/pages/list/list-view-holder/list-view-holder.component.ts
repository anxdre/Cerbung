import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-view-holder',
  templateUrl: './list-view-holder.component.html',
  styleUrls: ['./list-view-holder.component.scss'],
})


export class ListViewHolderComponent implements OnInit {
  @Input({required:true}) title!: string
  @Input({required:true}) price!: string
  @Input({required:true}) discountedPrice!: string
  @Input({required:true}) discount!: string
  @Input({required:true}) description!: string

  ngOnInit() {
  }

}

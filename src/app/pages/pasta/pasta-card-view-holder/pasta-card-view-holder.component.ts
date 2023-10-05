import {ChangeDetectorRef, Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pasta-card-view-holder',
  templateUrl: './pasta-card-view-holder.component.html',
  styleUrls: ['./pasta-card-view-holder.component.scss'],
})
export class PastaCardViewHolderComponent implements OnInit {
  @Input({required:true}) title!: string
  @Input({required:false})imgUrl!: string
  @Input({required:false})description!: string
  @Input({required:true})spice: boolean = false

  constructor() {

  }

  ngOnInit() {
  }


}

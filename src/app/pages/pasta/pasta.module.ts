import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PastaPageRoutingModule} from './pasta-routing.module';

import {PastaPage} from './pasta.page';
import {SharedModule} from "../../shared/module/shared.module";
import {PastaCardViewHolderComponent} from "./pasta-card-view-holder/pasta-card-view-holder.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastaPageRoutingModule,
    SharedModule
  ],
  declarations: [PastaPage, PastaCardViewHolderComponent]
})
export class PastaPageModule {
}

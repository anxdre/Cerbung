import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ListPageRoutingModule} from './list-routing.module';

import {ListPage} from './list.page';
import {ListViewHolderComponent} from "./list-view-holder/list-view-holder.component";
import {AppModule} from "../../app.module";
import {SharedModule} from "../../shared/module/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    SharedModule,
  ],
  declarations: [ListPage, ListViewHolderComponent]
})
export class ListPageModule {
}

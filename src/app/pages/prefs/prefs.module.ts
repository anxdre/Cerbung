import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefsPageRoutingModule } from './prefs-routing.module';

import { PrefsPage } from './prefs.page';
import {SharedModule} from "../../shared/module/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PrefsPageRoutingModule,
        SharedModule
    ],
  declarations: [PrefsPage]
})
export class PrefsPageModule {}

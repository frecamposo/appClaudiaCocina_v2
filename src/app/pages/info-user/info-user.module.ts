import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUserPageRoutingModule } from './info-user-routing.module';

import { InfoUserPage } from './info-user.page';
import { CompartidoModule } from 'src/app/components/compartido.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUserPageRoutingModule,
    CompartidoModule,
  ],
  declarations: [InfoUserPage]
})
export class InfoUserPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendacionesPageRoutingModule } from './recomendaciones-routing.module';
import { RecomendacionesPage } from './recomendaciones.page';

import { CompartidoModule } from 'src/app/components/compartido.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendacionesPageRoutingModule,
    CompartidoModule,
  ],
  declarations: [RecomendacionesPage,]
})
export class RecomendacionesPageModule {}

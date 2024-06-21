import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,  // Importar FormsModule para usar ngModel
    IonicModule,
  ],
  exports: [HeaderComponent,]  // Exportar el componente para que pueda ser usado en otros módulos
})
export class HeaderModule { }

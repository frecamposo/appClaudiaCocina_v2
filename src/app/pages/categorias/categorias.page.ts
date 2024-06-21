import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from 'src/app/service/local-storage.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  usuario:string='';
  constructor(private localSt:LocalStorageService) { }

  ngOnInit() {
    this.usuario = this.localSt.getItem('usuario') || '';
  }

  onCategoryChanged(category: string) {
    //console.log('Categoria Seleccionada:', category);
    // Realizar acciones adicionales según la categoría seleccionada en la página uno
  }

}

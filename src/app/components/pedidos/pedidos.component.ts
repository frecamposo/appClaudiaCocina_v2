import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ped',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent  implements OnInit {

  constructor() { }

  items: Array<{ id: number, titulo: string,imagen:string,cantidad:number,precio:number }> = [];

  ngOnInit() {

    this.items = [
      { id: 1, titulo: 'Cordero Castellana',imagen:'plato1.jpg',cantidad:1,precio:2500 },
      { id: 2, titulo: 'Cerdo en salsa de la abuela',imagen:'plato2.jpg',cantidad:1,precio:3500},
      { id: 3, titulo: 'Chuleta de cerdo valluna',imagen:'plato3.jpg',cantidad:10,precio:2500},
    ];
  }

}

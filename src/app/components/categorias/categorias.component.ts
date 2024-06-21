import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catego',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent  implements OnInit {

  constructor() { }

  items: Array<{ id: number, titulo: string,texto: string,imagen:string,disponible:number }> = [];


  ngOnInit() {

    this.items = [
      { id: 1, titulo: 'Carnes',texto:'Descubre recetas de carne fáciles y perfectas para sorprender a todos tus invitados navegando por este completo listado.',imagen:'cate_carne.jpg',disponible:10 },
      { id: 2, titulo: 'Sopas',texto:'Las sopas tienen muchas ventajas. la mejor sin duda, es que puedes incorporar en un solo plato una gran cantidad de ingredientes. Verduras, carnes, huevo, pan, pastas, legumbres' ,imagen:'cate_sopas.jpg',disponible:10},
      { id: 3, titulo: 'Tragos y Bebidas',texto:'Los cócteles y bebidas son primordiales en un buen almuerzo o en una cena. Aprende qué ingredientes combinar para crear bebidas que sorprendan a todos o revisa esa receta de toda la vida pero que te genera dudas' ,imagen:'cate_tragos.jpg',disponible:10},
      { id: 4, titulo: 'Postres',texto:'Recetas de postres caseros y fáciles es lo que encontrarás en este completo listado. Flan, budín de pan, tarta de limón, tarta de chocolate, gelatina, mousse y mucho más.' ,imagen:'cate_postre.jpg',disponible:10},
      { id: 5, titulo: 'Mariscos',texto:'En este completo listado encontrarás platos de mariscos variados y deliciosos, como la tradicional sopa de marisco, el popular salpicón de marisco o recetas de marisco en salsa' ,imagen:'cate_mar.jpg',disponible:10},
      { id: 6, titulo: 'Pastas',texto:' Si eres un amante de las recetas de pasta, en este listado encontrarás toda una variedad de platos: pasta fresca, pasta con pollo, pasta con verduras, pasta con tomate, etc.' ,imagen:'cate_pasta.jpg',disponible:10},

    ];
  }

}

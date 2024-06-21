import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reco',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.scss'],
})
export class RecomendacionesComponent  implements OnInit {

  constructor() { }

  items: Array<{ id: number, titulo: string,texto: string,imagen:string,disponible:number }> = [];

  ngOnInit() {
    this.items = [
      { id: 1, titulo: 'Cordero Castellana',texto:'Este cordero asado al estilo castellano es todo un clásico de cualqueir celebración, sobre todo en las ceebraciones de Navidad. Es una receta muy sencilla de preparar en la que la pieza clave es elegir una materia prima de gran calidad y tener un poquito de paciencia ya que requerirá al menos dos horas de cocción en el horno',imagen:'plato1.jpg',disponible:10 },
      { id: 2, titulo: 'Cerdo en salsa de la abuela',texto:'Hoy hemos cocinado unos escalopines de lomo de cerdo en una salsa muy especial. Es tan sencilla de hacer y está tan buena que da rabia no haber tenido antes la receta. Se trata de una receta tradicional de las que preparaban las abuelas de antes, a la que le hemos añadido unas pequeñas modificaciones para darle algo más de color y sabor.' ,imagen:'plato2.jpg',disponible:10},
      { id: 3, titulo: 'Chuleta de cerdo valluna',texto:'Esta receta es facilísima de preparar y la hago con la misma técnica que uso para hacer el pollo a la parmesana, siempre sazono bien cada ingrediente del apanado para que cada bocado tenga un buen sabor.' ,imagen:'plato3.jpg',disponible:10},
      { id: 4, titulo: 'Cerdo en salsa amarilla',texto:'Cómo hacer un guiso de costillas con patatas. Que mejor que una receta de carne en forma de guiso o estofado para alimentarse bien en tu menú semanal o en un día especial. Cuando tengáis un mal día que mejor que alimentarse bien, «al mal tiempo buena cara y la panza llena' ,imagen:'plato4.jpg',disponible:10},
      { id: 5, titulo: 'Pescado Marinado',texto:'Es sencillo. Marinar es una técnica de cocina en la que remojamos el pescado con un líquido aromático (salsa, adobo o hierbas aromáticas) para darle un aroma especial y mantenerlo suave o tierno.' ,imagen:'plato5.jpg',disponible:10},
      { id: 6, titulo: 'Alcachofas a la cerveza ',texto:'Limpiamos las alcachofas y lo que nos quede lo partimos a la mitad. Lo vamos añadiendo en un bowl con agua fría y un chorrín de zumo de limón para que no se oxiden. No echar mucho zumo de limón que sino cogen mucho sabor. Reservamos' ,imagen:'plato6.jpg',disponible:10},

    ];
  }


}

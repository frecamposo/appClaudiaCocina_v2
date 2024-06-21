import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private navCtrl:NavController) { }

  selectedCategory: string='';

  @Output() categoryChange = new EventEmitter<string>();

  ngOnInit() {
    console.log("OK Header")
  }

  pedidos(){
    this.navCtrl.navigateForward('/pedidos')
  }
  usuario(){
    this.navCtrl.navigateForward('/info-user')
  }
  onCategoryChange(event: any){
    this.selectedCategory = event.detail.value;
    this.categoryChange.emit(this.selectedCategory); 
    console.log('Categoria Selecionada:', this.selectedCategory);
    switch (this.selectedCategory) {
      case "1":
          console.log("Carnes");
          break;
      case "2":
          console.log("Sopas");
          break;
      case "3":
          console.log("Tragos");
          break;
      case "7":
          console.log("Recomendaciones");
          this.navCtrl.navigateForward("/recomendaciones");
          break;   
      case "8":
        console.log("categorias");
        this.navCtrl.navigateForward("/categorias");
        break;            
      default:
        break;
    }
  }
}

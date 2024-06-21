import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
  usuario: string = '';

  constructor(
    private localSt: LocalStorageService,
    private loadingCtrl: LoadingController,
    private alertCtrl:AlertController,
  ) {}

  ngOnInit() {
    this.usuario = this.localSt.getItem('usuario') || '';
  }

  async comprar() {
    const loading = await this.loadingCtrl.create({
      message: 'Por Favor Espere...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    
    const alert = await this.alertCtrl.create({
      header: 'Pedido',
      subHeader: 'Informacion Pedido',
      message: 'Su pedido fue confirmado',
      buttons: ['OK']
    });

    await alert.present();
    
  }
   async anular() {
    const loading = await this.loadingCtrl.create({
      message: 'Por Favor Espere...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    
    const alert = await this.alertCtrl.create({
      header: 'Pedido',
      subHeader: 'Informacion Pedido',
      message: 'Su pedido fue cancelado',
      buttons: ['OK']
    });

    await alert.present();

  }
}

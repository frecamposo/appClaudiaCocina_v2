import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { Router,NavigationExtras} from '@angular/router';

import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string =''
  password:string=''

  parsedValue: number | null = null;

  constructor(private alertCtrl:AlertController, private router: Router,private localSt: LocalStorageService) {


  }

  ngOnInit() {

  }
  async validarUsuario() {
    let largo=this.usuario.length;
    console.log(largo)
    if (largo<3 ||  largo>8) {
      const alert = await this.alertCtrl.create({
        header: 'Iniciar Sesion',
        message: 'Usuario debe estar entre 3 y 8 caracteres',
        buttons: ['OK']
      });
      await alert.present();
      return;
    } 
    this.parsedValue = parseInt(this.password, 10);
    if (isNaN(this.parsedValue)) {
      const alert = await this.alertCtrl.create({
        header: 'Iniciar Sesion',
        message: 'La password debe ser numerica',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    largo = this.password.length;
    if (largo!=4) {
      const alert = await this.alertCtrl.create({
        header: 'Iniciar Sesion',
        message: 'Password debe ser de 4 numeros',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    let navigationExtras: NavigationExtras = {
      state: {
        datos: this.usuario
      }
    };
    this.localSt.setItem('usuario', this.usuario);
    this.router.navigate(['categorias'], navigationExtras);

  }

}

import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {
  constructor(private localSt: LocalStorageService) {}
  usuario: string = '';
  ngOnInit() {
    this.usuario = this.localSt.getItem('usuario') || '';
  }
}

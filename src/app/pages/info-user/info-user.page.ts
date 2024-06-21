import { Component, OnInit  } from '@angular/core';

import { LocalStorageService } from 'src/app/service/local-storage.service';
@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.page.html',
  styleUrls: ['./info-user.page.scss'],
})
export class InfoUserPage implements OnInit {

 

  constructor(private localSt: LocalStorageService) { }
  usuario: string = '';

  ngOnInit() {
    this.usuario = this.localSt.getItem('usuario') || '';

  };

  
}
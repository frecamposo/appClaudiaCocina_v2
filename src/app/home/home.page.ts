import { Component } from '@angular/core';
import { SQLite,SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  db!: SQLiteObject;
  book_name!:string;
  book_price!:string;
  bookData:book[];

  constructor(private sqllite:SQLite, private router: Router) {}

  selectedSegment: string = 'home';

  segmentChanged(event: any) {
    console.log('Segment changed', event);
    this.selectedSegment = event.detail.value;
    this.router.navigate(['/splah']);
  }
  splash(){
    this.router.navigate(['/splah']);
  }

  crearAbrirBaseDeDatos(){
    try {
      this.sqllite.create({
        name:"data.db",
        location:"default"
      }).then((db:SQLiteObject)=>{
        this.db=db;
        alert("base de datos creada o abierta")
      })
    } catch (error) {
      alert(error)
    }
  }
  crearTabla(){
    this.db.executeSql('create table IF NOT EXISTS books(name VARCHAR(32),price NUMBER)').then((result)=>{
      alert("tabla creada")
    }).catch(e=>{
      alert(JSON.stringify(e))
    })
  }
  insertar(){
    let query:string=`insert into books(name,price) values('${this.book_name}',${this.book_price})`
    this.db.executeSql(query,[]).then(()=>{
      alert("registro insertado");
    }).catch(e=>{alert(JSON.stringify(e))})
  }
  selectData(){
    this.bookData=[]
    this.db.executeSql('select * from books',[]).then((result)=>{
      for (let index = 0; index < result.rows.length; index++) {
        this.bookData.push({"book_name":result.rows.item(index).name,"book_price":result.rows.item(index).price});
        
      }
    }).catch(e=>alert(JSON.stringify(e)))
  }
  selectByCodicion(){
    this.bookData=[]
    this.db.executeSql('select * from books where name=?',[this.book_name]).then((result)=>{
      for (let index = 0; index < result.rows.length; index++) {
        this.bookData.push({"book_name":result.rows.item(index).name,"book_price":result.rows.item(index).price});
        
      }
    }).catch(e=>alert(JSON.stringify(e)))
  }

  actualizar(){
    alert(this.book_name)
    alert(this.book_price)
    let nombre:string=this.book_name
    let precio:number=parseInt(this.book_price)
    this.db.executeSql('update books set price=? where name=?',[precio,nombre]).
    then((result)=>{
      alert(JSON.stringify(result))
    }).catch(e=>alert(JSON.stringify(e)))
  }

  eliminar(){
    this.bookData=[]
    this.db.executeSql('delete from books where name=?',[this.book_name])
    .then((result)=>{
     alert(JSON.stringify(result))
    }).catch(e=>alert(JSON.stringify(e)))
  }
}

class book{
  public book_name:string
  public book_price:number
}
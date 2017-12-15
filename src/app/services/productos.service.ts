import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ProductosService {

  productos:any[] =[];
  cargando_productos:boolean =true;

  constructor(private http: Http) {
    
       this.cargarProductos();
    
       }

  public cargarProductos()
  {
    if(this.productos.length ===0)
    {
      this.http.get('https://paginaweb-e539f.firebaseio.com/productos_idx.json').subscribe(res =>{
        console.log(res.json());
        this.productos=res.json();
        this.cargando_productos=false;
      });
    }
  }

}

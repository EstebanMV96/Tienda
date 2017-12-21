import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ProductosService {

  productos:any[] =[];
  cargando:boolean =true;

  constructor(private http: Http) {
    
       this.cargarProductos();
    
       }

  public cargarProductos()
  {
    if(this.productos.length ===0)
    {
      this.http.get('https://paginaweb-e539f.firebaseio.com/productos_idx.json').subscribe(res =>{
        this.productos=res.json();
        this.cargando=false;
      });
    }
  }

}

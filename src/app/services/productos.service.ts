import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class ProductosService {

  productos:any[] =[];
  cargando:boolean =true;
  productos_filtrado:any[] = [];
  constructor(private http: Http) {
    
       this.cargarProductos();
    
       }

  public cargarProductos()
  {
    let promesa=new Promise((resolve,reject)=>{

      if(this.productos.length ===0)
      {
        this.http.get('https://paginaweb-e539f.firebaseio.com/productos_idx.json').subscribe(res =>{
          this.productos=res.json();
          this.cargando=false;
          resolve();
        });
      }

    });
    return promesa;
  }

  public cargar_producto(id:string)
  {
    return this.http.get('https://paginaweb-e539f.firebaseio.com/productos/'+id+'.json');
  }

  public buscar_producto(termino:string)
  {
    if(this.productos.length===0)
    {
        this.cargarProductos().then( ()=>{
        this.filtrar_productos(termino);
        });
    }else{
      this.filtrar_productos(termino);
    }


   
  }

  private filtrar_productos(termino:string)
  {
    this.productos_filtrado=[];
    termino=termino.toLowerCase();
    this.productos.forEach( prod=>{
      
            if(prod.categoria.indexOf(termino)>=0|| prod.titulo.toLowerCase().indexOf(termino)>=0)
            {
              this.productos_filtrado.push(prod);
            }
            
      
          });
  }

}

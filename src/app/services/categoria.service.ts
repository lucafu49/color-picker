import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias: { nombre: string, subcategorias: string[] }[] = [
    { nombre: 'Electrónica', subcategorias: ['Teléfonos', 'Computadoras', 'Tabletas'] },
    { nombre: 'Ropa', subcategorias: ['Camisetas', 'Pantalones', 'Chaquetas'] },
    { nombre: 'Hogar', subcategorias: ['Muebles', 'Electrodomésticos', 'Decoración'] }
  ];

  constructor() { }

  agregarCategoria(nombreCategoria: string){
    this.categorias.push({nombre: nombreCategoria, subcategorias: []});
  }
  agregarSubCategoria(index: number, nombreCategoria:string){
    this.categorias[index].subcategorias.push(nombreCategoria);
  }
  obtenerCategorias(): { nombre: string, subcategorias: string[] }[] {
    return this.categorias;
  }
}

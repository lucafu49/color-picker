import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: { nombre: string, subcategorias: string[] }[] = [];

  constructor(private datosService: CategoriaService){ }

  ngOnInit():void{
    this.categorias = this.datosService.obtenerCategorias();
  }

  agregarCategoria(){
    const nombreCategoria = prompt('Ingrese el nombre de la categoría:');

    if (nombreCategoria) {
      this.datosService.agregarCategoria(nombreCategoria);
      this.categorias = this.datosService.obtenerCategorias(); // Actualizar la lista de categorías
    }
  }
  agregarSubcategoria(categoria: { nombre: string, subcategorias: string[] }) {
    // Lógica para agregar una nueva subcategoría
    const nombreSubcategoria = prompt('Ingrese el nombre de la subcategoría para ' + categoria.nombre + ':');
    if (nombreSubcategoria) {
      const index = this.categorias.indexOf(categoria);
      this.datosService.agregarSubCategoria(index, nombreSubcategoria);
      this.categorias = this.datosService.obtenerCategorias(); // Actualizar la lista de categorías
    }
  }
}

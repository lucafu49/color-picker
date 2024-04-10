import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos: any[] = [];

  constructor(private jsonApiService: ApiService) {}

  ngOnInit() {
    this.jsonApiService.getProductos().subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    });
  }
}

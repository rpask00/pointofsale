import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  public products$: Observable<Product[]>

  constructor(
    private productSv: ProductsService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productSv.getAllProducts()
  }

}

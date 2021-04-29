import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { ProductsService } from './../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  public products$: Observable<Product[]>

  constructor(
    private productSv: ProductsService
  ) { }

  ngOnInit(): void {
  }

  search() {
    let code = (document.getElementById('code') as any).value
    this.products$ = this.productSv.searchProducts(code)
  }

  exit() {
    let code = "";
    (document.getElementById('code') as any).value = ""
    this.products$ = this.productSv.searchProducts(code)
  }

}

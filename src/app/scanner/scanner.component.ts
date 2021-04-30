import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { ProductsService } from './../services/products.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  public product$: Observable<Product>
  public scanned_products: Product[] = []
  public scnanerOn = false
  public scanned_products_price: number

  constructor(
    private productSv: ProductsService
  ) { }

  ngOnInit(): void {
  }

  search() {
    let code = (document.getElementById('code') as HTMLInputElement).value
    if (!code) return

    if (!this.scnanerOn) {
      this.scnanerOn = true;
      this.scanned_products = []
    }

    this.product$ = this.productSv.findProduct(code)
    this.product$.pipe(take(1)).subscribe(p => {
      if (p && !this.scanned_products.find(sp => sp.ID == p.ID)) this.scanned_products.push(p)
    })

  }

  exit() {
    if (!this.scanned_products.length) return

    this.product$ = null;
    this.scnanerOn = false;

    this.scanned_products_price = this.scanned_products.map(p => p.price).reduce((prev, curr) => prev + curr);
  }

}

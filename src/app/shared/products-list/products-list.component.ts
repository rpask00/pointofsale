import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, AfterViewInit {

  @ViewChildren("product") productsREfs: QueryList<ElementRef<HTMLDivElement>>
  @Input("products") products: Product[];
  @Input("bgColor") bgColor: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.productsREfs.forEach(product => product.nativeElement.classList.add(this.bgColor || "bg-primary"));
  }

}

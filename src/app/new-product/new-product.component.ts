import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from './../../models/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  productForm: FormGroup
  id: string = ''

  constructor(
    private ProductSv: ProductsService,
    private toastr: ToastrService
  ) {
    this.productForm = new FormGroup({
      name: new FormControl(null, {
        updateOn: "change",
      }),
      price: new FormControl(null, {
        updateOn: "change",
      }),
      photo: new FormControl(null, {
        updateOn: "change",
      }),

    });
  }

  ngOnInit(): void {
    this.id = this.generateId();
  }

  generateId() {
    let id = ""

    for (let i = 0; i < 10; i++)
      id += ((Math.random() * 10) + '')[0]

    return id
  }

  submitForm(e): void {
    e.preventDefault();
    let product: Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      ID: this.id,
    }

    let fileinput = document.querySelector("#photoinput") as HTMLInputElement

    this.ProductSv.addProduct(product, fileinput.files[0]).then(res => {
      this.toastr.success("Product succesfully created")

      this.productForm.reset()

      fileinput.value = ''
    })

    this.id = this.generateId();
  }


}

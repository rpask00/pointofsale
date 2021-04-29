import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Product } from './../../models/product';
import { FilesService } from './files.service';
import { map } from "rxjs/operators"
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private afDB: AngularFireDatabase,
    private FileSv: FilesService
  ) { }

  async addProduct(product: Product, photo: File): Promise<void> {
    this.afDB.list('/products').push(product)

    return await this.FileSv.uploadPhoto(photo, "photos", product.ID)
  }

  searchProducts(code: string): Observable<Product[]> {

    return this.afDB.list('/products').valueChanges().pipe(
      map((products: Product[]) => {
        products = products.map((product: Product) => {
          product.photo = this.FileSv.getDownloadLink("photos/" + product.ID);
          return product as Product;
        })

        products = products.filter(product => product.ID.indexOf(code) != -1)

        return products
      })
    )

  }
}

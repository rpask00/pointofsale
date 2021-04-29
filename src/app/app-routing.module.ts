import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  {
    path: "scan",
    pathMatch: "full",
    component: ScannerComponent,
  },
  {
    path: "new",
    pathMatch: "full",
    component: NewProductComponent,
  },
  {
    path: "all",
    pathMatch: "full",
    component: AllProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

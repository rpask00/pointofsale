import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

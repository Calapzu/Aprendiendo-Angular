import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },

  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  //Cuando el usuario digita una ruta o mal o quiere acceder a una ruta que
  //no esta se puede utilizar de este modo o crearse la pagina de 404 
  
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

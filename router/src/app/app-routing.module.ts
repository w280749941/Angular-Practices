import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { SellerInfoComponent } from './seller-info/seller-info.component';
import { ChatComponent } from './chat/chat.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {path: 'home', component: HomeComponent},
  {path: 'product/:id', component: ProductComponent, children: [
    {path: '', component: ProductDescComponent},
    {path: 'seller/:id', component: SellerInfoComponent}
  ], resolve: {
    product: ProductResolve
  }},
  // ], canActivate: [LoginGuard],
  //    canDeactivate: [UnsavedGuard]}, // Multiple LoginGuard can be assigned here.
  // {path: 'product/:id', component: ProductComponent}, // This supports path variable
  // {path: 'product', component: ProductComponent} this supports query parameter,
  {path: '**', component: Code404Component} // Fallback to this page not exist
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]// [LoginGuard, UnsavedGuard] // Register object here for DI
})
export class AppRoutingModule { }

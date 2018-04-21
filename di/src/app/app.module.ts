import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherProductService } from './shared/another-product.service';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  // using factory design pattern for provider service.
  providers: [{
    provide: ProductService,
    useFactory: (logger: LoggerService, appConfig) => {
      if (appConfig.isDev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, 'APP_CONFIG'] // Dependencies needed inside useFactory.
    // If LoggerService is another factory, it will satisfy that factory first.
  }, LoggerService,
      {
        provide: 'APP_CONFIG', useValue: {isDev: false}
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
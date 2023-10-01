import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Drivers } from '@ionic/storage';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { routes } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers:[
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  importProvidersFrom(IonicModule.forRoot({})),
  importProvidersFrom(IonicStorageModule.forRoot({
    name: 'testdb',
    driverOrder: [Drivers.IndexedDB]
  })
  ),

  provideRouter(routes),
  ],
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { ClothesDetailModule } from './clothes-detail/clothes-detail.module';
import { ClothesDataService } from './main/clothes/clothes-data.service';

import { MainComponent } from './main/main.component';
import { ClothesDetailComponent } from './clothes-detail/clothes-detail.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  {
    path: 'clothes',
    component: MainComponent
  },
  { 
    path: 'clothes/:id',
    component: ClothesDetailComponent
  },
  { path: '',
    redirectTo: '/clothes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MainModule,
    ClothesDetailModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    ClothesDataService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

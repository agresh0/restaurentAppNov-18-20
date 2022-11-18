import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { ViewRestaurentComponent } from './view-restaurent/view-restaurent.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { UpdatesRestaurentComponent } from './updates-restaurent/updates-restaurent.component';
import { DeleteRestaurentComponent } from './delete-restaurent/delete-restaurent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentListComponent,
    ViewRestaurentComponent,
    AddRestaurentComponent,
    UpdatesRestaurentComponent,
    DeleteRestaurentComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

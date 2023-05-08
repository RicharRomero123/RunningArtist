import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { TableOffersComponent } from './components/table-offers/table-offers.component';
import { NewOfferComponent } from './components/new-offer/new-offer.component';
import { EditOfferComponent } from './components/edit-offer/edit-offer.component';
import { MaterialModule } from './shared/material.module';
import{MatIconModule} from '@angular/material/icon';
import{MatTableModule} from '@angular/material/table';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatButtonModule} from '@angular/material/button';
import{FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import{ReactiveFormsModule} from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from "@angular/material/grid-list";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
  AppComponent,
  ToolbarComponent,
  HomeComponent,
  TableOffersComponent,
  NewOfferComponent,
  EditOfferComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule,
    MaterialModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableOffersComponent } from './components/table-offers/table-offers.component';
import { NewOfferComponent } from './components/new-offer/new-offer.component';
import { EditOfferComponent } from './components/edit-offer/edit-offer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'business/offers', component: TableOffersComponent},
  {path: 'admin/offers/new',component:NewOfferComponent},
  {path: 'admin/offers/edit/:id',component:EditOfferComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

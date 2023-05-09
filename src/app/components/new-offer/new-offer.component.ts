import { Component } from '@angular/core';
import  {Offers} from 'src/app/models/running.models'
import { RunningService } from 'src/app/services/running.service';
import { HttpClientJsonpModule } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table'
@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent {
  
  OfferData!:Offers;
  dataSource = new MatTableDataSource();

  constructor(private offersService:RunningService) {
    this.OfferData = {} as Offers
  }

  addMovie()
  {
    this.OfferData.id = 0;
    this.offersService.createItem(this.OfferData).subscribe((response:any)=>{
      response.points = parseInt(response.points)
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any)=> {return 0;});
    });
  }

  

}

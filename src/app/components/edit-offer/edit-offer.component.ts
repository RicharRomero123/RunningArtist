import { Component } from '@angular/core';
import  {Offers} from 'src/app/models/running.models'
import { RunningService } from 'src/app/services/running.service';
import { ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent {
  OfferData!:Offers;
  OfferForm!:NgForm;
  dataSource = new MatTableDataSource();
  
  constructor(private offersService:RunningService,private route: ActivatedRoute) {
    this.OfferData = {} as Offers
    
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id); // Imprime el valor del id en la consola
  }
  updateOffer()
  {
    this.offersService.updateItem(this.OfferData.id,this.OfferData).subscribe((response:any)=>{
      this.dataSource.data = this.dataSource.data.map((o:any) =>{
        if(o.id == response.id){
          o = response;
        }
        return 0;
      });
    });
    
  }
  cancelEdit(){
    
    this.OfferForm.resetForm();
  }


}

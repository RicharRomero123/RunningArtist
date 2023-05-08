import { Component,OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'

import { RunningService } from 'src/app/services/running.service';

import * as _ from 'lodash';
import  {Offers} from 'src/app/models/running.models'


@Component({
  selector: 'app-table-offers',
  templateUrl: './table-offers.component.html',
  styleUrls: ['./table-offers.component.scss']
})
export class TableOffersComponent {

  
  OfferData!:Offers;
  

  dataSource = new MatTableDataSource();
  displayedColumns:string[]=['id','title','description','points','businessId','actions']

  @ViewChild(MatPaginator, {static: true})
  paginator!:MatPaginator;
  isEditMode=false;

  @ViewChild(MatSort)
  sort!:MatSort;
  
  
  
  constructor(private offersService:RunningService) {
    this.OfferData = {} as Offers
  }

 


  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllOffers();
    
  }

  getAllOffers()
  {
    this.offersService.getList().subscribe((response:any)=>{
      this.dataSource.data = response
      
    })
  }

  editItem(element: any)
  {
    this.OfferData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  deleteItem(id:string)
  {
    this.offersService.deleteItem(id).subscribe((response: any)=>{
      this.dataSource.data = this.dataSource.data.filter((o:any)=>{
        return o.id !== id ? o: false;
      });
      
    });
    console.log(this.dataSource.data)
    
  }



 

 

}

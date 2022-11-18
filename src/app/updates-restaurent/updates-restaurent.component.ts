import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-updates-restaurent',
  templateUrl: './updates-restaurent.component.html',
  styleUrls: ['./updates-restaurent.component.css']
})
export class UpdatesRestaurentComponent implements OnInit {

  restId:any;
  restDetails:any;

  constructor(private activatedRoute :ActivatedRoute,private apiservice:ApiService,private router:Router) { }

  ngOnInit(): void {
    //1. get restaurent id to get updated
    this.activatedRoute.params.subscribe((result:any)=>{
      this.restId = result["id"]
    })
    //2.fetch details of restaurent id
    this.apiservice.viewRestaurent(this.restId)
    .subscribe((result)=>{
      this.restDetails = result
      
    })
    }

    // updateRestaurent
    updateRestaurent(form:any){
      console.log(form.value);
      let updatedRestBody = {      
      id:form.value.id,
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      name:form.value.rName,
      address:form.value.address,
      cuisine_type:form.value.cusineType,
      reviews:[
        {
        name:form.value.rvname,
        date:form.value.date,
        rating:form.value.rating,
        comments:form.value.comments,
        }
      ],
      latlng:{
        lat:form.value.latitude,
        lng:form.value.longitude
      },
    }
    this.apiservice.updateRestaurent(this.restId,updatedRestBody)
    .subscribe((data)=>{
      alert("Details Succesfully Updated")
      this.router.navigateByUrl('')
    })
  
   }

}

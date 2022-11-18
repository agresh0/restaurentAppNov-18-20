import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {

  id:any;
  neighborhood:any;
  photograph:any;
  operating_hours:any;
  rName:any;
  address:any;
  cusineType:any;
  reviews:any;
  rating:any;
  Monday: any;
  Tuesday: any;
  Wednesday: any;
  Sunday: any;
  Thursday: any;
  Friday: any;
  Saturday: any;
  date: any;
  comments: any;
  rvname: any;
  latlng:any;
  latitude: any;
  longitude: any;
  

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    }
    
    addProduct(){
      let newRestaurent = {
        id:this.id,
        neighborhood:this.neighborhood,
        photograph:this.photograph,
        operating_hours:{
          Monday:this.Monday,
          Tuesday:this.Tuesday,
          Wednesday:this.Wednesday,
          Thursday:this.Thursday,
          Friday:this.Friday,
          Saturday:this.Saturday,
          Sunday:this.Sunday
        },
        name:this.rName,
        address:this.address,
        cuisine_type:this.cusineType,
        reviews:[
          {
          name:this.rvname,
          date:this.date,
          rating:this.rating,
          comments:this.comments,
          }
        ],
        latlng:{
          lat:this.latitude,
          lng:this.longitude
        },
      }
      console.log(newRestaurent);
      this.api.addRestaurent(newRestaurent).subscribe(()=>{
        alert("Restaurent Successfully Added")
        this.router.navigateByUrl('')
      })
    
    }
    
  }



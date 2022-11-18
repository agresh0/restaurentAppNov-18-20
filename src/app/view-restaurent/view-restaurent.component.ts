import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-restaurent',
  templateUrl: './view-restaurent.component.html',
  styleUrls: ['./view-restaurent.component.css']
})
export class ViewRestaurentComponent implements OnInit {

  restId: any;
  restDetails:any;
  // activatedRoute is a concept to get details from url

  constructor(private activatedRoute:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(result=>{
      // console.log(result['id']);
      this.restId = result['id']
      
    })

    this.apiService.viewRestaurent(this.restId).subscribe((result:any)=>{
      console.log(result);
      this.restDetails = result
      
    })
  }

}

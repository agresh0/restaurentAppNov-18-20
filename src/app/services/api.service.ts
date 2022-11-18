import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeleteRestaurentComponent } from '../delete-restaurent/delete-restaurent.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// property

search =new BehaviorSubject("")


  constructor(private api:HttpClient) { }

  // user defined functions

  // to get all restaurent list API call - http://localhost:3000/restaurants

  getRestaurentsList(){
    // use http request get -make api call to http://localhost:3000/restaurants
    // get() - HttpClient class(this is a module) - HttpClientModule library
    return this.api.get('http://localhost:3000/restaurants')

  }

  // 2. get a single resstaurent detail from api
  viewRestaurent(restId:any){
    return this.api.get('http://localhost:3000/restaurants/'+restId)
  }

  // 3. To add new restaurent details
  addRestaurent(newRestaurent:any){
    return this.api.post('http://localhost:3000/restaurants/',newRestaurent)
  }

  // 4.To Update Restaurent Details
  updateRestaurent(restId:any,updatedRestBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,updatedRestBody)

  }

  // 5.To delete perticular restaurent
  deleteRestaurent(restId:any){
    return this.api.delete('http://localhost:3000/restaurants/'+restId)
  }
}

import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { ListingModel } from './listing.model';
 
let baseUrl:string = "https://ofosoft.com.tr/rehber/servis";

@Injectable()
export class ListingService {

  constructor(public http: Http) {}

  getData(): Promise<ListingModel> {
    return this.http.get('./assets/example_data/listing.json')
     .toPromise()
     .then(response => response.json() as ListingModel)
     .catch(this.handleError);
  }

  haberler() {
    return this.http.get(baseUrl + "/haberler").map(res => res.json());
  }

  sektorler() {
    return this.http.get(baseUrl + "/sektorler").map(res => res.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

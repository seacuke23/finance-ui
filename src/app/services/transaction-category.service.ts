import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionCategoryService {

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get(environment.apiURL + "/trans_category");  
  }
}

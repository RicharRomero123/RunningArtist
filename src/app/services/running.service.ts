import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter,Injectable,Output } from '@angular/core';
import { catchError ,Observable, retry,throwError } from 'rxjs';
import {Offers} from '../models/running.models'

@Injectable({
  providedIn: 'root'
})
export class RunningService {

  base_Url ="http://localhost:3000/offers";
  constructor(private http: HttpClient) { }

  httpOptions =
  {
    headers: new  HttpHeaders({
        'Content-type':'application/json',

     }),
  };

  handleError(error : HttpErrorResponse)  
  {
    if(error.error instanceof ErrorEvent)
    {
      console.log(`An error ocurred ${error.status},body was: ${error.error}`);
    }
    else{
      console.log(`Backend returned cod ${error.status}, body was: ${error.error}`);
    }
    return throwError
    (
      'Something happend with request, try again'
    );
  } 

  getList():Observable<Offers>
  {
    return this.http.get<Offers>(this.base_Url)
    .pipe(retry(2),catchError(this.handleError));
  }

  getItem(id:String):Observable<Offers>
  {
    return this.http.get<Offers>(this.base_Url+'/'+id)
    .pipe(retry(2),catchError(this.handleError));
  }

  updateItem(Id:string,item:any): Observable<Offers>
  {
    return this.http.put<Offers>(this.base_Url+'/'+ Id,JSON.stringify(item),this.httpOptions)
    .pipe(retry(2),catchError(this.handleError));
  }

  createItem(item:any):Observable<Offers>
  {
    return this.http
    .post<Offers>(this.base_Url,JSON.stringify(item),this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

  deleteItem(id:string):Observable<Offers>
  {
    return this.http.delete<Offers>(`${this.base_Url}/${id}`,this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
  }

}

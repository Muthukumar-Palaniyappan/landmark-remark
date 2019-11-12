import {Injectable} from '@angular/core'
import { Marker } from '../model/marker'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,throwError} from 'rxjs'
import {retry,catchError} from 'rxjs/operators'
//import {Marker} from '../model'
@Injectable({
    providedIn:'root'
})
export class  MarkerService
{
constructor(private httpClient:HttpClient)
{
}
baseURL='http://localhost:61752/api/landmark';
httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
}
   addMarker(markers:Marker[], lat: number, lng: number,alpha:number,remark:string) {
     
    
    

    //console.log(lat,lng,markers);
    markers.push({  Lattitude :lat,
      Longitude:lng,
      Alpha:alpha,
      Remark:remark });
      return markers;
  }

  addMark(marker:Marker)
  {
    return this.httpClient.post<Marker>(this.baseURL,JSON.stringify(marker),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandle)
    );

  }

  errorHandle(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


}


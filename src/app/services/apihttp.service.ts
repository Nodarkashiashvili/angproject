import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihttpService {

  constructor(private http : HttpClient) { }

getData(url : string){
  return this.http.get(url)
  .pipe(
    catchError(this.errorHandling)
  )
}

deleteData(url : string){
  return this.http.delete(url, {responseType : 'text'})
  .pipe(
    catchError(this.errorHandling)
  )
}

postData(url : string, obj : any){
  return this.http.post(url, obj).pipe(
    catchError(this.errorHandling)
  )
  
  
}

postDataByText(url : string, obj : any){
  return this.http.post(url, obj, {responseType : 'text'}).pipe(
    catchError(this.errorHandling)
  )
  
  
}



private errorHandling (err : HttpErrorResponse){
  return throwError(()=>{
    Error('somethin went wrong tyu alert')
    alert('somethin went wrong tyu alert')
  })
}
}

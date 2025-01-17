import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { JwtService } from './jwt.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, be: string = "api_url", params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment[be]}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
  getUser(path: string, be: string = "api_url", params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment[be]}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  putLaravel(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.laravel_be}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  postLaravel(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.laravel_be}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  deleteGo(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.laravel_be}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}

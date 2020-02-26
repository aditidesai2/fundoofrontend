import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  postWithoutHeader(url: any, uploadData: any) {
    throw new Error("Method not implemented.");
  }

  baseUrl = environment.apiUrl;
  token = localStorage.getItem('FundooToken');

  httpOptions = new HttpHeaders().set('token', this.token)

  constructor(private http: HttpClient) { }

  public postUser(options) {

    //console.log("httpService",options.url);

    console.log("this.baseurl", this.baseUrl);
    console.log("options.data", options.data);



    return this.http.post(this.baseUrl + options.url, options.data);
  }
  public post(options) {
    console.log('token', this.token)

    let url = this.baseUrl + options.url;
    console.log("baseUrl", url)

    console.log("options", options.data)
    return this.http.post(this.baseUrl + options.url, options.data, { headers: this.httpOptions });

  }
}

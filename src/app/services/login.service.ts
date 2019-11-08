import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import ILoginRequestModel from '../models/ILoginRequestModel';
import { DEFAULT_HTTP_OPTIONS } from '../constants/main.constants';
import { HelperFunctions } from '../helper.functions';
import IUserAuthenticationModel from '../models/IUserAuthenticationModel';
import IResponseModel from '../models/IResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
    this.urlPrefix = environment.domain + this.urlPrefix;
  }
  public signedUser: IUserAuthenticationModel;
  private urlPrefix = '/api/auth/';
  public HTTP_OPTIONS = {};

  loginUser(data: ILoginRequestModel): Observable<IResponseModel<IUserAuthenticationModel>> {
    const url = `${this.urlPrefix}login`;
    return this.http.post<IResponseModel<IUserAuthenticationModel>>(url, data, DEFAULT_HTTP_OPTIONS)
      .pipe(
        catchError(HelperFunctions.handleError<null>())
      );
  }
}

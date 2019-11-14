import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import IResponseModel from '../models/IResponseModel';
import { LoginService } from './login.service';
import ICategoryModel from '../models/ICategoryModel';
import ITopicData from '../models/ITopicData';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private urlPrefix = '/api/topic/';
  public topicData: ITopicData = {};
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-dialog-centered modal-md'
  };
  public topicFormData: FormData = new FormData();
  constructor(private http: HttpClient,
              private loginService: LoginService) {
    this.urlPrefix = environment.domain + this.urlPrefix;
  }

  getCategories(): Observable<IResponseModel<Array<ICategoryModel>>> {
    const url = `${this.urlPrefix}category`;
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'language': '1',
        'Authorization': `Bearer ${this.loginService.signedUser.authToken}`
      });
    return this.http.get<IResponseModel<Array<ICategoryModel>>>(url, {headers});
  }

  addTopic(data): Observable<IResponseModel<any>> {
    console.log(this.topicData);
    const url = `${this.urlPrefix}`;
    console.log(this.loginService.signedUser.authToken);
    const headers = new HttpHeaders({
        // 'Content-Type': 'application/json',
        'language': '1',
        'Authorization': `Bearer ${this.loginService.signedUser.authToken}`
      });
    return this.http.post<IResponseModel<any>>(url, data, {headers});
  }
}

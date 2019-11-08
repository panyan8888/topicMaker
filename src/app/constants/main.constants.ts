import { HttpHeaders } from '@angular/common/http';

export const OS_TYPE = 3;

export const DEFAULT_HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    language: '1'
  })
};

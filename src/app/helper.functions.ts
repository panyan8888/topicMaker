import { Observable, of } from 'rxjs';


export class HelperFunctions {

  public static handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }
}

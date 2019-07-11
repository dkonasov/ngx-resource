import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class NgxResourceService<T, R = T[], I = number> {
  protected _apiEndpoint: string;
  protected _httpClient: HttpClient;

  public list(
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    },
    params?: HttpParams | {
        [param: string]: string | string[];
    }
  ): Observable<HttpResponse<R>> {
    return this._beforeRequest.pipe(
      mergeMap(
        () => this._httpClient.get<R>(this._apiEndpoint, {
          headers: headers,
          params: params,
          observe: 'response'
        })
      )
    );
  }

  public get(
    id: I,
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    },
    params?: HttpParams | {
      [param: string]: string | string[];
  }
  ): Observable<HttpResponse<T>> {
    return this._beforeRequest.pipe(
      mergeMap(
        () => this._httpClient.get<T>(this._apiEndpoint + '/' + id, {
          headers: headers,
          params: params,
          observe: 'response'
        })
      )
    );
  }

  public add(
    entity: T,
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    }
  ): Observable<HttpResponse<T>> {
    return this._beforeRequest.pipe(
      mergeMap(
        () => this._httpClient.post<T>(this._apiEndpoint, entity, {
          headers: headers,
          observe: 'response'
        })
      )
    );
  }

  public update(
    id: I,
    entity: T,
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    }
  ): Observable<HttpResponse<T>> {
    return this._beforeRequest.pipe(
      mergeMap(() => this._httpClient.put<T>(this._apiEndpoint + '/' + id, entity, {
        headers: headers,
        observe: 'response'
      }))
    );
  }

  public delete(
    id: I,
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    }
  ): Observable<HttpResponse<void>> {
    return this._beforeRequest.pipe(
      mergeMap(
        () => this._httpClient.delete<void>(this._apiEndpoint + '/' + id, {
          headers: headers,
          observe: 'response'
        })
      )
    );
  }
  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  protected _beforeRequest: Observable<void> = new Observable((observer: Observer<void>): void => {
      observer.complete();
  });
}
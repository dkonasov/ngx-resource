import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class NgxResourceService<T, R = T[], I = number> {
    protected _apiEndpoint: string;
    protected _httpClient: HttpClient;
    list(headers?: HttpHeaders | {
        [header: string]: string | string[];
    }, params?: HttpParams | {
        [param: string]: string | string[];
    }): Observable<HttpResponse<R>>;
    get(id: I, headers?: HttpHeaders | {
        [header: string]: string | string[];
    }, params?: HttpParams | {
        [param: string]: string | string[];
    }): Observable<HttpResponse<T>>;
    add(entity: T, headers?: HttpHeaders | {
        [header: string]: string | string[];
    }): Observable<HttpResponse<T>>;
    update(id: I, entity: T, headers?: HttpHeaders | {
        [header: string]: string | string[];
    }): Observable<HttpResponse<T>>;
    delete(id: I, headers?: HttpHeaders | {
        [header: string]: string | string[];
    }): Observable<HttpResponse<void>>;
    constructor(httpClient: HttpClient);
    protected _beforeRequest: Observable<void>;
}

import { HttpHeaders, HttpParams, HttpResponse, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export declare class NgxResourceService<T, R = T[], I = number> {
    protected _apiEndpoint: string;
    protected _httpClient: HttpClient;

    public list(
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        },
        params?: HttpParams | {
            [param: string]: string | string[];
        }
    ): Observable<HttpResponse<R>>;

    public get(
        id: I,
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        },
        params?: HttpParams | {
            [param: string]: string | string[];
        }
    ): Observable<HttpResponse<T>>;

    public add(
        entity: T,
        headers?: HttpHeaders | {
          [header: string]: string | string[];
        }
    ): Observable<HttpResponse<T>>;

    public update(
        id: I,
        entity: T,
        headers?: HttpHeaders | {
        [header: string]: string | string[];
        }
    ): Observable<HttpResponse<T>>;

    public delete(
        id: I,
        headers?: HttpHeaders | {
          [header: string]: string | string[];
        }
    ): Observable<HttpResponse<void>>;

    constructor(httpClient: HttpClient);
}
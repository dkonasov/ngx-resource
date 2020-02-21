import { __decorate } from 'tslib';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

let NgxResourceService = class NgxResourceService {
    constructor(httpClient) {
        this._beforeRequest = new Observable((observer) => {
            observer.complete();
        });
        this._httpClient = httpClient;
    }
    list(headers, params) {
        return this._beforeRequest.pipe(mergeMap(() => this._httpClient.get(this._apiEndpoint, {
            headers: headers,
            params: params,
            observe: 'response'
        })));
    }
    get(id, headers, params) {
        return this._beforeRequest.pipe(mergeMap(() => this._httpClient.get(this._apiEndpoint + '/' + id, {
            headers: headers,
            params: params,
            observe: 'response'
        })));
    }
    add(entity, headers) {
        return this._beforeRequest.pipe(mergeMap(() => this._httpClient.post(this._apiEndpoint, entity, {
            headers: headers,
            observe: 'response'
        })));
    }
    update(id, entity, headers) {
        return this._beforeRequest.pipe(mergeMap(() => this._httpClient.put(this._apiEndpoint + '/' + id, entity, {
            headers: headers,
            observe: 'response'
        })));
    }
    delete(id, headers) {
        return this._beforeRequest.pipe(mergeMap(() => this._httpClient.delete(this._apiEndpoint + '/' + id, {
            headers: headers,
            observe: 'response'
        })));
    }
};
NgxResourceService.ctorParameters = () => [
    { type: HttpClient }
];
NgxResourceService = __decorate([
    Injectable()
], NgxResourceService);

/**
 * Generated bundle index. Do not edit.
 */

export { NgxResourceService };
//# sourceMappingURL=ngx-resource.js.map

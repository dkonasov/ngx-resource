import { __decorate } from 'tslib';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

var NgxResourceService = /** @class */ (function () {
    function NgxResourceService(httpClient) {
        this._beforeRequest = new Observable(function (observer) {
            observer.complete();
        });
        this._httpClient = httpClient;
    }
    NgxResourceService.prototype.list = function (headers, params) {
        var _this = this;
        return this._beforeRequest.pipe(mergeMap(function () { return _this._httpClient.get(_this._apiEndpoint, {
            headers: headers,
            params: params,
            observe: 'response'
        }); }));
    };
    NgxResourceService.prototype.get = function (id, headers, params) {
        var _this = this;
        return this._beforeRequest.pipe(mergeMap(function () { return _this._httpClient.get(_this._apiEndpoint + '/' + id, {
            headers: headers,
            params: params,
            observe: 'response'
        }); }));
    };
    NgxResourceService.prototype.add = function (entity, headers) {
        var _this = this;
        return this._beforeRequest.pipe(mergeMap(function () { return _this._httpClient.post(_this._apiEndpoint, entity, {
            headers: headers,
            observe: 'response'
        }); }));
    };
    NgxResourceService.prototype.update = function (id, entity, headers) {
        var _this = this;
        return this._beforeRequest.pipe(mergeMap(function () { return _this._httpClient.put(_this._apiEndpoint + '/' + id, entity, {
            headers: headers,
            observe: 'response'
        }); }));
    };
    NgxResourceService.prototype.delete = function (id, headers) {
        var _this = this;
        return this._beforeRequest.pipe(mergeMap(function () { return _this._httpClient.delete(_this._apiEndpoint + '/' + id, {
            headers: headers,
            observe: 'response'
        }); }));
    };
    NgxResourceService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    NgxResourceService = __decorate([
        Injectable()
    ], NgxResourceService);
    return NgxResourceService;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { NgxResourceService };
//# sourceMappingURL=ngx-resource.js.map

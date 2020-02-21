import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
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
export { NgxResourceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc291cmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtcmVzb3VyY2UvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9uZ3gtcmVzb3VyY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUM7SUF5RkUsNEJBQVksVUFBc0I7UUFJeEIsbUJBQWMsR0FBcUIsSUFBSSxVQUFVLENBQUMsVUFBQyxRQUF3QjtZQUNqRixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFMRCxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBdkZNLGlDQUFJLEdBQVgsVUFDRSxPQUVDLEVBQ0QsTUFFQztRQU5ILGlCQWlCQztRQVRDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzdCLFFBQVEsQ0FDTixjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtZQUMvQyxPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUMsRUFKSSxDQUlKLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLGdDQUFHLEdBQVYsVUFDRSxFQUFLLEVBQ0wsT0FFQyxFQUNELE1BRUQ7UUFQRCxpQkFrQkM7UUFUQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM3QixRQUFRLENBQ04sY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtZQUMxRCxPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUMsRUFKSSxDQUlKLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLGdDQUFHLEdBQVYsVUFDRSxNQUFTLEVBQ1QsT0FFQztRQUpILGlCQWNDO1FBUkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsUUFBUSxDQUNOLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBSSxLQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRTtZQUN4RCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDLEVBSEksQ0FHSixDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQ0UsRUFBSyxFQUNMLE1BQVMsRUFDVCxPQUVDO1FBTEgsaUJBYUM7UUFOQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM3QixRQUFRLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFJLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUU7WUFDM0UsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQyxFQUhhLENBR2IsQ0FBQyxDQUNKLENBQUM7SUFDSixDQUFDO0lBRU0sbUNBQU0sR0FBYixVQUNFLEVBQUssRUFDTCxPQUVDO1FBSkgsaUJBY0M7UUFSQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM3QixRQUFRLENBQ04sY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFPLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRTtZQUNoRSxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsVUFBVTtTQUNwQixDQUFDLEVBSEksQ0FHSixDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQUN1QixVQUFVOztJQXpGdkIsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQixDQWdHOUI7SUFBRCx5QkFBQztDQUFBLEFBaEdELElBZ0dDO1NBaEdZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hSZXNvdXJjZVNlcnZpY2U8VCwgUiA9IFRbXSwgSSA9IG51bWJlcj4ge1xuICBwcm90ZWN0ZWQgX2FwaUVuZHBvaW50OiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfaHR0cENsaWVudDogSHR0cENsaWVudDtcblxuICBwdWJsaWMgbGlzdChcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XG4gICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9LFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XG4gICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgfVxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxSPj4ge1xuICAgIHJldHVybiB0aGlzLl9iZWZvcmVSZXF1ZXN0LnBpcGUoXG4gICAgICBtZXJnZU1hcChcbiAgICAgICAgKCkgPT4gdGhpcy5faHR0cENsaWVudC5nZXQ8Uj4odGhpcy5fYXBpRW5kcG9pbnQsIHtcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSdcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldChcbiAgICBpZDogSSxcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XG4gICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9LFxuICAgIHBhcmFtcz86IEh0dHBQYXJhbXMgfCB7XG4gICAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICB9XG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7XG4gICAgcmV0dXJuIHRoaXMuX2JlZm9yZVJlcXVlc3QucGlwZShcbiAgICAgIG1lcmdlTWFwKFxuICAgICAgICAoKSA9PiB0aGlzLl9odHRwQ2xpZW50LmdldDxUPih0aGlzLl9hcGlFbmRwb2ludCArICcvJyArIGlkLCB7XG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGQoXG4gICAgZW50aXR5OiBULFxuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcbiAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIH1cbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5fYmVmb3JlUmVxdWVzdC5waXBlKFxuICAgICAgbWVyZ2VNYXAoXG4gICAgICAgICgpID0+IHRoaXMuX2h0dHBDbGllbnQucG9zdDxUPih0aGlzLl9hcGlFbmRwb2ludCwgZW50aXR5LCB7XG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoXG4gICAgaWQ6IEksXG4gICAgZW50aXR5OiBULFxuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcbiAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIH1cbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHtcbiAgICByZXR1cm4gdGhpcy5fYmVmb3JlUmVxdWVzdC5waXBlKFxuICAgICAgbWVyZ2VNYXAoKCkgPT4gdGhpcy5faHR0cENsaWVudC5wdXQ8VD4odGhpcy5fYXBpRW5kcG9pbnQgKyAnLycgKyBpZCwgZW50aXR5LCB7XG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSdcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlKFxuICAgIGlkOiBJLFxuICAgIGhlYWRlcnM/OiBIdHRwSGVhZGVycyB8IHtcbiAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIH1cbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8dm9pZD4+IHtcbiAgICByZXR1cm4gdGhpcy5fYmVmb3JlUmVxdWVzdC5waXBlKFxuICAgICAgbWVyZ2VNYXAoXG4gICAgICAgICgpID0+IHRoaXMuX2h0dHBDbGllbnQuZGVsZXRlPHZvaWQ+KHRoaXMuX2FwaUVuZHBvaW50ICsgJy8nICsgaWQsIHtcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSdcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG4gIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLl9odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBfYmVmb3JlUmVxdWVzdDogT2JzZXJ2YWJsZTx2b2lkPiA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8dm9pZD4pOiB2b2lkID0+IHtcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gIH0pO1xufSJdfQ==
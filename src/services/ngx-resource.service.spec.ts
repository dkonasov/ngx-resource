import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpResponse, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { NgxResourceService } from '../';

const TEST_API_ENDPOINT = 'http://localhost:8080';

class TestRestEntity {
    id: number;
    name: string;
}

@Injectable()
export class TestRestService extends NgxResourceService<TestRestEntity> {
    constructor(httpClient: HttpClient) {
        super(httpClient);
        this._apiEndpoint = TEST_API_ENDPOINT;
    }
}

describe('ngx-resource service test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                NgxResourceService,
                TestRestService
            ]
        })
    });

    it('constructor must work', inject(
        [
            TestRestService
        ], (service: TestRestService) => {
            expect(service).toBeTruthy();
        }
    ));

    it('list method must return http request', inject(
        [   HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            let response: any;
            service.list().toPromise().then(res => response = res);
            backend.expectOne(req => true).flush([]);
            tick();
            expect(response instanceof HttpResponse).toBe(true);
        })
    ));

    it('list method must return array of items in request body', inject(
        [   HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            let response: HttpResponse<any>;
            service.list().toPromise().then(res => response = res);
            backend.expectOne(req => true).flush([
                new TestRestEntity,
                new TestRestEntity
            ]);
            tick();
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBe(2);
            expect(response.body[0] instanceof TestRestEntity).toBe(true);
            expect(response.body[1] instanceof TestRestEntity).toBe(true);
        })
    ));

    it (
        'list method must perfom request to the api endpoint via get method',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            let method: string;
            service.list().toPromise();
            const testRequest = backend.expectOne(TEST_API_ENDPOINT);
            method = testRequest.request.method;
            testRequest.flush([]);
            tick();
            expect(method).toBe('GET');
        }))
    );

    it (
        'list method must perfom request to the api endpoint via get method',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            let method: string;
            service.list().toPromise();
            const testRequest = backend.expectOne(TEST_API_ENDPOINT);
            method = testRequest.request.method;
            testRequest.flush([]);
            tick();
            expect(method).toBe('GET');
        }))
    );

    it (
        'list method must send headers and params if they are specified',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            const headers = new HttpHeaders({foo: 'bar'});
            const params = new HttpParams({
                fromObject: {
                    foo: 'bar'
                }
            });
            service.list(headers, params).toPromise();
            const testRequest = backend.expectOne(req => true);
            testRequest.flush([]);
            tick();
            expect(testRequest.request.headers.get('foo')).toBe('bar');
            expect(testRequest.request.params.get('foo')).toBe('bar');
        }))
    );

    it (
        'list method must return headers and params if they are specified',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            const headers = new HttpHeaders({foo: 'bar'});
            let response: HttpResponse<any>;
            service.list().toPromise().then(res => response = res);
            const testRequest = backend.expectOne(req => true);
            testRequest.flush([], { headers: headers });
            tick();
            expect(response.headers.get('foo')).toBe('bar');
        }))
    );

    it (
        'get method must return HttpResponse',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            let response: any;
            service.get(42).toPromise().then(res => response = res);
            const testRequest = backend.expectOne(req => true);
            testRequest.flush(null);
            tick();
            expect(response instanceof HttpResponse).toBe(true);
        }))
    );

    it (
        'get method must return type param entity in body',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            let response: any;
            service.get(42).toPromise().then(res => response = res);
            const testRequest = backend.expectOne(req => true);
            testRequest.flush(new TestRestEntity);
            tick();
            expect(response.body instanceof TestRestEntity).toBe(true);
        }))
    );

    it (
        'get method must return reponse via get method',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            const ENTITY_ID = 42;
            service.get(ENTITY_ID).toPromise();
            const testRequest = backend.expectOne(`${TEST_API_ENDPOINT}/${ENTITY_ID}`);
            testRequest.flush(new TestRestEntity);
            tick();
            expect(testRequest.request.method).toBe('GET');
        }))
    );

    it (
        'get method must send headers and params if they are specified',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            const ENTITY_ID = 42;
            const headers = new HttpHeaders({
                foo: 'bar'
            });
            const params = new HttpParams({
                fromObject: {
                    foo: 'bar'
                }
            });
            service.get(ENTITY_ID, headers, params).toPromise();
            const testRequest = backend.expectOne(`${TEST_API_ENDPOINT}/${ENTITY_ID}?foo=bar`);
            testRequest.flush(new TestRestEntity);
            tick();
            expect(testRequest.request.headers.get('foo')).toBe('bar');
            expect(testRequest.request.params.get('foo')).toBe('bar');
        }))
    );

    it (
        'add method must return http response',
        inject([
            HttpTestingController,
            TestRestService
        ], fakeAsync((backend: HttpTestingController, service: TestRestService) => {
            let response: any;
            service.add(new TestRestEntity).toPromise().then(res => response = res);
            const testRequest = backend.expectOne(`${TEST_API_ENDPOINT}`);
            testRequest.flush(new TestRestEntity);
            tick();
            expect(response instanceof HttpResponse).toBe(true);
        }))
    );
});

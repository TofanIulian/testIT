import {
  HttpBackend,
  HttpClient
} from '@angular/common/http';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { HttpDataService } from './http-data.service';

describe('HttpDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpDataService: HttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpDataService
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    httpDataService = new HttpDataService(httpClient);
  });

  it('exists', inject([HttpDataService], (service: HttpDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('location', () => {
    it('gets the location of the ISS now', () => {
      httpDataService.location().subscribe(x => {
        expect(x.iss_position).toEqual({ longitude: 50.1719, latitude: 44.4423 });
      });
      const req = httpTestingController.expectOne(
        'http://api.open-notify.org/iss-now.json'
      );
      expect(req.request.method).toEqual('GET');
      req.flush({
        iss_position: { longitude: -138.1719, latitude: 44.4423 },
        timestamp: 1584554806,
        message: 'success'
      });
      httpTestingController.verify();
    });
  });
});


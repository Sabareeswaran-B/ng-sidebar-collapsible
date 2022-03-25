import { TestBed } from '@angular/core/testing';

import { NgSidenavService } from './ng-sidenav.service';

describe('NgSidenavService', () => {
  let service: NgSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

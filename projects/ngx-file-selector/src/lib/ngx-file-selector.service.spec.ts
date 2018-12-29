import { TestBed } from '@angular/core/testing';

import { FileSelectorService } from './ngx-file-selector.service';

describe('FileSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileSelectorService = TestBed.get(FileSelectorService);
    expect(service).toBeTruthy();
  });
});

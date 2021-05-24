import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SkillService } from './skill.service';


describe('SkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: SkillService = TestBed.get(SkillService);
    expect(service).toBeTruthy();
  });
});

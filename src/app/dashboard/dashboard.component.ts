import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: Array<any>;
  loading;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.loading = true;
    this.skillService.getSkills().subscribe(
      (ret: Array<any>) => {
        this.cards = ret
      }, errors => {
        console.error(errors);
      }, () => {
        this.loading = false;
      }
    );
  }

}

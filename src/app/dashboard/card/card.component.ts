import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  loadingCounter = 0;
  @Input() card;

  constructor(
    private httpClient: HttpClient,
    private skillService: SkillService
  ) { }

  ngOnInit() { 
    
  }

  onLike(card: any){
    this.loadingCounter++;
    card.likes++;

    this.skillService.updateSkill(card).subscribe((respose: any) => {
      console.log(respose);
    }, error => {
      console.error(error);
      card.likes--;
    }, () => {
      this.loadingCounter--;
    });
  }

  onShare(card: any){
    window.open('http://linkedin.com.br/in/joneyjs', '_blank')
  }

  cardClasses(card: any){
    return { 
      'likes-5': card.likes > 5 && card.likes < 10, 
      'likes-10': card.likes > 10,
    }
  }

}

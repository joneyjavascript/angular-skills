import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Skill } from "../interfaces/Skill";

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  constructor(
    public http: HttpClient
  ){

  }

  public getSkill(id: number){
    return this.http.get('/api/skills/' + id);
  }

  public getSkills(){
    return this.http.get('/api/skills/');
  }

  public updateSkill(skill: Skill){
    return this.http.put('/api/skills/' + skill.id, skill);
  }

  public deleteSkill(id: number){
    return this.http.delete('/api/skills/' + id);
  }

  public createSkill(skill: Skill){
    return this.http.post('/api/skills/', skill);
  }
}
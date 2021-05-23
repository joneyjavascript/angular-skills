import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  @Input("contextual") contextual: boolean = true; // indentify if loading is contextual ou global
  @Input("show") show: boolean = false;

  constructor() { }
}

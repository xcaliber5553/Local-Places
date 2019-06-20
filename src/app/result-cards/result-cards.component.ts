import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result-cards',
  templateUrl: './result-cards.component.html',
  styleUrls: ['./result-cards.component.css']
})
export class ResultCardsComponent implements OnInit {

  _CardContent: any;
  @Input()
  set CardContent(value : any ){
      this._CardContent = value; 
  }
  get CardContent(){
      return this._CardContent;
  }

  constructor() { }

  ngOnInit() {
    console.log(this._CardContent)
  }

}

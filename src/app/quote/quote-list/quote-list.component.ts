import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() myQuotes;
  @Output() VoteEventUp = new EventEmitter();
  // @Output() VoteEventDown = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  voteup(){

  }
   votedown(){
    
  }
    delete(index){
    delete this.myQuotes[index]
  }
  VoteParentUp(index){
    // this.VoteEventUp.emit(index);
    console.log(index)
    this.myQuotes[index].vote += 1
  }
  VoteParentDown(index){
    // this.VoteEventUp.emit(index);
    console.log(index)
    this.myQuotes[index].vote -= 1
  }
  

  // VoteParentDown(){
  //   this.VoteEventDown.emit();
  // }
}

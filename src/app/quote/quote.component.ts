import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = []
  quote = {
    text: "",
    author: "",
    vote: 0
  }
  
  onSubmit(){
    this.quotes.push(this.quote)
    
    this.quote = {
    text: "",
    author: "",
    vote: 0
    }
  }
  voteUp(index){
    this.quotes[index].vote += 1
    console.log('it works i swear')
  }
   VoteDown(){
    this.quotes[0].vote -= 1
  }
  invoked(){
    console.log("invoked my G");
  }
  constructor() { }

  ngOnInit() {
  }

}
// {
//       quote: "I Like Turtles",
//       author: "tv kid",
//       vote: 0
//     },
//     {
//       quote: "We've got a golden ticket",
//       author: "Uncle Charlie",
//       vote: 0  
//     }
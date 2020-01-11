import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

quotes: Quote[] = [

];

addNewQuote(quote) {
quote.submittedBy = quote.submittedBy;
quote.author = quote.author;
quote.quote = quote.quote;
this.quotes.push(quote);



}

upvote(quote) {
  quote.upvoted =! quote.upvoted;


}

deleteEntry(index) {

  const toDelete = confirm(`Are you sure you want to delete`);
  if (toDelete) {

  this.quotes.splice(index, 1);
  }

}

votes(quote) {
  if(quote.upvoted) {
    return quote.votes + 1;
  }
  console.log(quote.votes);
}




  constructor() { }

  ngOnInit() {
  }

}

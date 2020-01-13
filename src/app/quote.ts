export class Quote {


  constructor(public quote: string, public author: string, public submitedBy: string, public datePosted: Date, public upvoted: number,
              public downvoted: number, public highvotes:number) {

  }
}

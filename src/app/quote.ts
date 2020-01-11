export class Quote {
  public votes: number;
  public upvoted: boolean;
  public downvoted: boolean;
  constructor(public quote: string, public author: string, public submitedBy: string) {
    this.votes = 0;
    this.upvoted = false;
    this.downvoted = false;
  }
}

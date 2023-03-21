class Email {
  private _from: string // = 'default@gmail.com'
  private _to: string;
  private _subject: string | undefined;
  private _message: string;

  constructor(
    from: string,
    to: string,
    subject: string,
    message: string
  ) { // = constructor(private from: string)
    this._from = from;
    this._to = to;
    this.subject = subject;
    this._message = message;
  }

  set subject(newValeu: string){
    if(newValeu.length <= 40)
      this._subject = newValeu;
  }

  get from() { return this._from; }
  get to() { return this._to; }
  get subject() { return this._subject || ''; }
  get message() { return this._message; }

  get content(): string {
    return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
  }
}

// const email2 = new Email();
// email2.content

class MailList {
  constructor(private mailList: Email[] = []) { }
  
}


export class Message {
  // user: string;
  // subject: string;
  // description: string;
  // date: string;
  // status: string;
  // from: string;
  //
  // reportingPeriod: string;
  // to: string;
  // notes: string;
  // warning: string;
  // contact: string;
  // OECDMessageRefID: string;
  // OECDMessageType: Array<string>;
  // OECDMessageTypeIndic: Array<string>;
  // sendingCountry: string;
  // receivingCountry: string;
  // Language: Array<string>;
  //
  // constructor(user, subject, description, date, status, from,
  //    reportingPeriod, to, notes, warning, contact, OECDMessageRefID, OECDMessageType, OECDMessageTypeIndic,
  //   sendingCountry, receivingCountry, Language) {
  //   this.user = user;
  //   this.subject = subject;
  //   this.description = description;
  //   this.date = date;
  //   this.status = status;
  //   this.from = from;
  //
  //   this.reportingPeriod = reportingPeriod;
  //   this.to = to;
  //   this.notes = notes;
  //   this.warning = warning;
  //   this.contact = contact;
  //   this.OECDMessageRefID = OECDMessageRefID;
  //   this.OECDMessageType = OECDMessageType;
  //   this.OECDMessageTypeIndic = OECDMessageTypeIndic;
  //   this.sendingCountry = sendingCountry;
  //   this.receivingCountry = receivingCountry;
  //   this.Language = Language;
  // };
    constructor(
      public user?: string,
      public subject?: string,
      public description?: string,
      public date?: string,
      public status?: string,
      public from?: string,

      public reportingPeriod?: string,
      public msgReceiverList?: string,
      public notes?: string,
      public warning?: string,
      public contact?: string,
      public OECDMessageRefID?: string,
      public OECDMessageType?: Array<string>,
      public OECDMessageTypeIndic?: Array<string>,
      public sendingCountry?: string,
      public receivingCountry?: string,
      public Language?: Array<string>,
    ){}
}

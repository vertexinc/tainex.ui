export class Message {
  user: string;
  subject: string;
  description: string;
  date: string;
  status: string;
  from: string;
  data: string;
  reportingPeriod: string;
  to: string;
  notes: string;
  warning: string;
  contact: string;
  OECDMessageRefID: string;
  OECDMessageType: Array<string>;
  OECDMessageTypeIndic: Array<string>;
  sendingCountry: string;
  receivingCountry: string;
  Language: Array<string>;

  constructor(user, subject, description, date, status, from,
    data, reportingPeriod, to, notes, warning, contact, OECDMessageRefID, OECDMessageType, OECDMessageTypeIndic,
    sendingCountry, receivingCountry, Language) {
    this.user = user;
    this.subject = subject;
    this.description = description;
    this.date = date;
    this.status = status;
    this.from = from;
    this.data = data;
    this.reportingPeriod = reportingPeriod;
    this.to = to;
    this.notes = notes;
    this.warning = warning;
    this.contact = contact;
    this.OECDMessageRefID = OECDMessageRefID;
    this.OECDMessageType = OECDMessageType;
    this.OECDMessageTypeIndic = OECDMessageTypeIndic;
    this.sendingCountry = sendingCountry;
    this.receivingCountry = receivingCountry;
    this.Language = Language;
  }
}

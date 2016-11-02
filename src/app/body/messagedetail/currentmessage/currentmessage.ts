export interface Currentmessage {
  senderId: number,
  ownerId: number,
  note: string,
  tieMessageStateId: number,
  sendingEntityId: number,
  receivingCountries: Array<string>,
  messageType: string,
  language: string,
  warning: string,
  contact: string,
  messageRefId: number,
  messageTypeIndic: number,
  corrMessageRefIds: number,
  reportingPeriod: string
}

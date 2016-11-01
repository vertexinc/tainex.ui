export interface TieMsg {

  tieMsgId?: number,
  senderId?: number,
  ownerId?: number,
  note?: string,
  tieMessageStateId?: number,
  sendingEntityId?: number,
  receivingCountries?: Array<string>,
  messageType?: string,
  language?: string,
  user?: string,
  subject?: string,
  description?: string,
  date?: string,
  status?: string,
  warning?: string,
  contact?: string,
  messageRefId?: number,
  messageTypeIndic?: number,
  corrMessageRefIds?: number,
  reportingPeriod?: string

}

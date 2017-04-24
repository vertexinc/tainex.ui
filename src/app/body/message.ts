

export class Message {

    constructor(
      public tieMsgId?:number,
      public user?: string,
      public subject?: string,
      public description?: string,
      public timestamp?: string,
      public status?: string,
      public from?: string,

      public reportingPeriod?: string,
      public msgReceiverList?: string,
      public notes?: string,
      public warning?: string,
      public contact?: string,
      public language?: string,
      public messageRefId?: string,
      public messageType?: string,
      public messageTypeIndic?: string,
      public transmittingCountry?: string,
      public receivingCountries?: string,

    ){}
}


import { Message } from "../message";
import { Messagedetail } from "./messagedetail/messagedetail";


export class Messagelist {
  messageSumList: Array<Message>;
  // currentMessage: Message;
  currentMessage: Messagedetail;
  constructor(messageSumList, currentMessage) {
    this.messageSumList = messageSumList;
    this.currentMessage = currentMessage;
  }


  // getCurrentMsg() {
  //    return this.currentMessage;
  //  }
  //
  // setCurrentMsg(Message){
  //   this.currentMessage = Message;
  // }
}

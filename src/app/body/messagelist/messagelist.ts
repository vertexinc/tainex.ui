
import { Message } from "../message";



export class Messagelist {
  messageSumList: Array<Message>;
  currentMessage: Message;

  constructor(messageSumList,currentMessage){
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

 import { Messagedetail } from "./messagedetail/messagedetail";
import { Messagelist } from "./messagelist/messagelist";
import { Searchcriteria } from "./searchcriteria/searchcriteria";
export class Body {
  searchCriteria: Searchcriteria;
  messageList: Messagelist;
  messageDetail: Messagedetail;
}

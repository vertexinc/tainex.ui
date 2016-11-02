import { Messagedetail } from "./messagedetail/messagedetail";
import { Messagelist } from "./messagelist/messagelist";
import { Searchcriteria } from "./searchcriteria/searchcriteria";
export interface Body {

  messagelist:  Array<Messagelist>;
  messagedetail: Messagedetail;
  searchcriteria: Searchcriteria;
}

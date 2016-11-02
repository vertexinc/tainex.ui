import {Cbcr} from "./cbcr/cbcr";
import {Currentmessage} from "./currentmessage/currentmessage";
import {Doclist} from "./doclist/doclist";
import {Entitylist} from "./entitylist/entitylist";

export interface Messagedetail {
  cbcr: Cbcr;
  currentmessage: Currentmessage;
  doclist: Doclist;
  entitylist: Entitylist;

}

import {Cbcr} from "./cbcr/cbcr";
import {Message} from "../../message";
import {Doclist} from "./doclist/doclist";
import {Entitylist} from "./entitylist/entitylist";

export class Messagedetail {
  cbcr: Cbcr;
  message: Message;
  doclist: Doclist;
  entitylist: Entitylist;

}

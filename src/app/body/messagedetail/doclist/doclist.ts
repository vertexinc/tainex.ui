import { DoclistRecord } from './doclistRecord';
export class Doclist {
  docSumList: Array<DoclistRecord>;
  currentDoc: DoclistRecord;

  constructor (docSumList,currentDoc){
    this.docSumList = docSumList;
    this.currentDoc = currentDoc;
  }
}

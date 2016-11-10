import { EntitylistRecord } from './entitylistRecord';

export class Entitylist {
  entitySumList: Array<EntitylistRecord>;

  constructor(entitySumList) {
    this.entitySumList = entitySumList;
  }
}

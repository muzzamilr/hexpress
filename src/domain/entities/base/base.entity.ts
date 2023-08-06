import { UUIDVO } from "@domain/valueObjects/uuid.vo";

export interface IBaseEntity {
  readonly Id: UUIDVO;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export abstract class BaseEntity implements IBaseEntity {
  Id: UUIDVO;
  createdAt: Date;
  updatedAt: Date;

  protected constructor() {
    this.Id = UUIDVO.new();
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }
}

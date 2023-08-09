import { UUIDVO } from "@domain/valueObjects/uuid.vo";

export interface IBaseEntity {
  readonly Id: UUIDVO;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export abstract class BaseEntity implements IBaseEntity {
  private _id: UUIDVO;
  private _createdAt: Date;
  private _updatedAt: Date;

  protected constructor() {
    this._id = UUIDVO.new();
    this._createdAt = new Date();
    this._updatedAt = this.createdAt;
  }

  get Id(): UUIDVO {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
}

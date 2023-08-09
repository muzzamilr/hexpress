import { UUIDVO } from "@domain/valueObjects/uuid.vo";
import { BaseEntity } from "../base/base.entity";

interface IBooking {
  clientId: UUIDVO;
  arrivalDate: Date;
  departurDate: Date;
  roomName: string;
}

export class BookingEntity extends BaseEntity implements IBooking {
  readonly departurDate: Date;
  readonly clientId: UUIDVO;
  readonly arrivalDate: Date;
  readonly roomName: string;

  private constructor(private readonly data: IBooking) {
    super();
    this.departurDate = data.departurDate;
    this.arrivalDate = data.arrivalDate;
    this.clientId = data.clientId;
    this.roomName = data.roomName;
  }

  static create(value: IBooking) {
    return new BookingEntity(value);
  }
}

import { UUIDVO } from "@domain/valueObjects/uuid.vo";
import { BaseEntity } from "../base/base.entity";

interface IBooking {
  clientId: UUIDVO;
  arrivalDate: Date;
  departurDate: Date;
}

class BookingEntity extends BaseEntity implements IBooking {
  readonly departurDate: Date;
  readonly clientId: UUIDVO;
  readonly arrivalDate: Date;

  private constructor(private readonly data: IBooking) {
    super();
    this.departurDate = data.departurDate;
    this.arrivalDate = data.arrivalDate;
    this.clientId = data.clientId;
  }

  static create(value: IBooking) {
    const { clientId, arrivalDate, departurDate } = value;
    return new BookingEntity({
      clientId,
      arrivalDate,
      departurDate,
    });
  }
}

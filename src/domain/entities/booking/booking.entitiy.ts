import { UUIDVO } from "@domain/valueObjects/uuid.vo";

interface IBooking {
  clientId: UUIDVO;
  arrivalDate: Date;
  departurDate: Date;
  bookingId: UUIDVO;
}

class BookingEntity implements IBooking {
  readonly departurDate: Date;
  readonly clientId: UUIDVO;
  readonly arrivalDate: Date;
  readonly bookingId: UUIDVO;

  private constructor(private readonly data: IBooking) {
    this.departurDate = data.departurDate;
    this.arrivalDate = data.arrivalDate;
    this.clientId = data.clientId;
    this.bookingId = data.bookingId;
  }

  static create(
    clientId: UUIDVO,
    bookingId: UUIDVO,
    arrivalDate: Date,
    departurDate: Date
  ) {
    return new BookingEntity({
      clientId,
      arrivalDate,
      departurDate,
      bookingId,
    });
  }
}

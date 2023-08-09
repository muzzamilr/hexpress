import { AlreadyExistsError, NotFoundError } from "../base/base.errors";

export class BookingAlreadyExists extends AlreadyExistsError {}

export class BookingNotFound extends NotFoundError {}

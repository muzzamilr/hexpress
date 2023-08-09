import { BaseRepository } from "../base/base.repository";
import { BookingEntity } from "./booking.entitiy";

export abstract class BookingRespository extends BaseRepository<BookingEntity> {}

import { AlreadyExistsError, NotFoundError } from "../base/base.errors";

export class RoomAlreadyExists extends AlreadyExistsError {}

export class RoomNotFound extends NotFoundError {}

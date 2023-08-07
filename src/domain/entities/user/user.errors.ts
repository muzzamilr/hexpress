import { AlreadyExistsError, NotFoundError } from "../base/base.errors";

export class UserAlreadyExists extends AlreadyExistsError {}

export class UserNotFound extends NotFoundError {}

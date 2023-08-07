import { AlreadyExistsError, NotFoundError } from "../base/base.errors";

export class BlogNotFound extends NotFoundError {}

export class BlogAlreadyExists extends AlreadyExistsError {}

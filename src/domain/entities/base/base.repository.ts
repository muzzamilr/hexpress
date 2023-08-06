import { Result } from "@carbonteq/fp";
import { BaseEntity } from "./base.entity";
import { NotFoundError, AlreadyExistsError } from "./base.errors";

export abstract class BaseRepository<T extends BaseEntity> {
  abstract fetchById(id: BaseEntity["Id"]): Promise<Result<T, NotFoundError>>;
  abstract fetchAll(): Promise<Result<T[], []>>;
  abstract insert(entity: T): Promise<Result<T, AlreadyExistsError>>;
  abstract update(entity: T): Promise<Result<T, NotFoundError>>;
  abstract deleteById(Id: BaseEntity["Id"]): Promise<Result<T, NotFoundError>>;
}

import { Result } from "@carbonteq/fp";
import {
  NotFoundError,
  AlreadyExistsError,
} from "@domain/entities/base/base.errors";
import { UserEntity } from "@domain/entities/user/user.entity";
import { UserRepository } from "@domain/entities/user/user.repository";
import { UUIDVO } from "@domain/valueObjects/uuid.vo";

export class UserPrismaRepository extends UserRepository {
  fetchById(id: UUIDVO): Promise<Result<UserEntity, NotFoundError>> {
    throw new Error("Method not implemented.");
  }
  fetchAll(): Promise<Result<UserEntity[], []>> {
    throw new Error("Method not implemented.");
  }
  insert(entity: UserEntity): Promise<Result<UserEntity, AlreadyExistsError>> {
    throw new Error("Method not implemented.");
  }
  update(entity: UserEntity): Promise<Result<UserEntity, NotFoundError>> {
    throw new Error("Method not implemented.");
  }
  deleteById(Id: UUIDVO): Promise<Result<UserEntity, NotFoundError>> {
    throw new Error("Method not implemented.");
  }
}

import { Result } from "@carbonteq/fp";
import {
  NotFoundError,
  AlreadyExistsError,
} from "@domain/entities/base/base.errors";
import { BlogEntity } from "@domain/entities/blog/blog.entity";
import { BlogRepository } from "@domain/entities/blog/blog.repository";
import { UUIDVO } from "@domain/valueObjects/uuid.vo";

export class BlogPrismaRepository extends BlogRepository {
  fetchById(id: UUIDVO): Promise<Result<BlogEntity, NotFoundError>> {
    throw new Error("Method not implemented.");
  }
  fetchAll(): Promise<Result<BlogEntity[], []>> {
    throw new Error("Method not implemented.");
  }
  insert(entity: BlogEntity): Promise<Result<BlogEntity, AlreadyExistsError>> {
    throw new Error("Method not implemented.");
  }
  update(entity: BlogEntity): Promise<Result<BlogEntity, NotFoundError>> {
    throw new Error("Method not implemented.");
  }
  deleteById(Id: UUIDVO): Promise<Result<BlogEntity, NotFoundError>> {
    throw new Error("Method not implemented.");
  }
}

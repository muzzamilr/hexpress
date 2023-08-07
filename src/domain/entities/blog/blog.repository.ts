import { BaseRepository } from "../base/base.repository";
import { BlogEntity } from "./blog.entity";

export abstract class BlogRepository extends BaseRepository<BlogEntity> {}

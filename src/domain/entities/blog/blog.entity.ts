import { BaseEntity, IBaseEntity } from "../base/base.entity";

export interface IBlogEntity extends IBaseEntity {
  title: string;
  author: string;
  url: string;
  likes: string;
}

export class BlogEntity extends BaseEntity implements IBlogEntity {
  title: string;
  author: string;
  url: string;
  likes: string;
  private constructor(blogData: IBlogEntity) {
    super();
    this.title = blogData.title;
    this.author = blogData.author;
    this.url = blogData.url;
    this.likes = blogData.likes;
  }
  create(blogData: IBlogEntity) {
    return new BlogEntity(blogData);
  }
}

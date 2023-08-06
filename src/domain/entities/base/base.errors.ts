class DomainError extends Error {
  protected constructor(private readonly msg: string) {
    super();
    this.name = this.constructor.name;
    this.msg;
  }
}

export class ValidationError extends DomainError {}
export class NotFoundError extends DomainError {}
export class AlreadyExistsError extends DomainError {}

// export type DomainErr = ValidationError;

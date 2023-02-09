export interface Repository<T> {
  findMany(opt: Record<string, unknown>): Promise<T[]>

  create(opt: Record<string, unknown>): Promise<T>

  findFirst(opt: Record<string, unknown>): Promise<T>
}

export interface ResponseData<T> {
  code: number,
  content: string,
  result: T
}
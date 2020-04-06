export interface IResponseData<T> {
  code: number,
  content: string,
  data: T
}
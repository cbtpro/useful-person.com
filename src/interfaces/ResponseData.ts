export interface IResponseData<T> {
  code: number,
  content: string,
  data: T
}
interface ISort { sorted: boolean, unsorted: boolean, empty: boolean }
export interface IPageable<T> {
  content: T[],
  pageable: {
    sort: ISort,
    offset: number,
    pageSize: number,
    pageNumber: number,
    paged: boolean,
    unpaged: boolean
  },
  totalPages: number,
  totalElements: number,
  last: boolean,
  size: number,
  numberOfElements: number,
  first: boolean,
  number: number,
  sort: ISort,
  empty: boolean
}
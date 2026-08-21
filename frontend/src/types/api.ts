export interface ApiResult<T> {
  data: T | null
  error: string | null
}

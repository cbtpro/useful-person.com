export interface DemoRequest {
  name: string
  sexId: number | undefined
  description?: string
}

export interface DemoInfo {
  id: number,
  name: string,
  sex: number,
  description: string
}

export type DemoResponse = DemoInfo[] | undefined
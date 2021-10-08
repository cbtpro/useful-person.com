interface DemoRequest {
  name: string
  sexId: number | undefined
  description?: string
}

interface DemoInfo {
  id: number,
  name: string,
  sex: number,
  description: string
}

type DemoResponse = DemoInfo[] | undefined

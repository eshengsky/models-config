export interface ModelsConfig {
  version: string
  lastUpdated: string
  updateUrl?: string
  providers: Record<string, Provider>
}

export interface Provider {
  id: string
  name: string
  description?: string
  logo?: string
  apiHost: string
  homeUrl?: string
  enabled: boolean
  requiresApiKey: boolean
  models: Model[]
}

export type ModelType = 'chat' | 'embedding' | 'rerank'

export interface Model {
  id: string
  name: string
  description?: string
  type: ModelType
  enabled: boolean
  contextWindow: number
  maxOutputTokens?: number
  embeddingDimension?: number
  capabilities: Capabilities
  pricing: Pricing
  tags?: string[]
}

export interface Capabilities {
  vision: boolean
  functionCalling: boolean
  webSearch: boolean
  streaming: boolean
  reasoning: boolean
  jsonMode?: boolean
  systemMessage?: boolean
}

export interface Pricing {
  currency: 'USD' | 'CNY' | 'EUR'
  input: number
  output: number
}
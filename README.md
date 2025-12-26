# AI Models Configuration

A standardized configuration file for AI models, containing detailed information about mainstream AI service providers and their models.

## 📋 Overview

This project provides a structured JSON configuration file that includes:

- **Multiple AI Service Providers**: OpenAI, Anthropic, Alibaba Cloud Bailian (DashScope), DeepSeek, and more
- **Detailed Model Information**: Context window, max output tokens, pricing, capabilities, etc.
- **Type Definitions**: Provides TypeScript type definitions and JSON Schema validation
- **Real-time Updates**: Supports fetching the latest configuration via CDN

## 🚀 Usage

### Direct Import

```typescript
import config from './config.json'

// Get all providers
const providers = config.providers

// Get models from a specific provider
const openaiModels = config.providers.openai.models
```

### Using Type Definitions

```typescript
import type { ModelsConfig, Provider, Model } from './types'

const config: ModelsConfig = {
  version: '1.0.0',
  lastUpdated: new Date().toISOString(),
  providers: {
    // ...
  }
}
```

### Fetch Latest Config via CDN

```typescript
const response = await fetch('https://cdn.jsdelivr.net/gh/eshengsky/models-config@main/config.json')
const config = await response.json()
```

## 📊 Configuration Structure

Each model contains the following information:

- **Basic Info**: ID, name, description, type
- **Context Window**: Maximum supported tokens
- **Capabilities**: Vision understanding, function calling, web search, streaming, reasoning, etc.
- **Pricing**: Input/output token prices and currency
- **Tags**: Categorization tags like recommended, fast, cheap, reasoning, etc.

## 🔧 Validation

Validate the configuration file using the provided JSON Schema:

```bash
# Use any JSON Schema validation tool
ajv validate -s config.schema.json -d config.json
```

## 📄 License

MIT

# Node.js Express API Template with Swagger

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org)
[![Backstage Template](https://img.shields.io/badge/Backstage-Template-blueviolet)](https://backstage.io/docs/features/software-templates/writing-templates)

A Backstage scaffolder template for generating modern Node.js Express APIs with OpenAPI/Swagger documentation and Backstage catalog integration.

## Purpose

This template streamlines the creation of standardized Node.js Express APIs within your organization, complete with:
- OpenAPI/Swagger documentation
- Backstage catalog integration (Component + API)
- Basic health and monitoring endpoints
- Professional project structure

## Features

- **Express API Boilerplate**: Production-ready Express.js setup
- **API Documentation**: Swagger UI at `/docs` endpoint
- **Basic Routes**:
  - `GET /health`: Health check endpoint
  - `GET /ping`: Simple ping-pong endpoint
- **OpenAPI Integration**: Specification available at `/docs/openapi.yaml`
- **Backstage Integration**: 
  - Component catalog-info
  - API catalog-info with OpenAPI spec
  - Auto-registration in Backstage catalog

## Tech Stack

- **Runtime**: Node.js (≥18)
- **Framework**: Express.js
- **Documentation**: OpenAPI/Swagger
- **Catalog**: Backstage Software Templates

## Importing the Template

1. Clone this repository into your Backstage project:
   ```bash
   git clone https://github.com/bancorocks/rocks.template-api-nodejs.git
   ```

2. Add the template location to your Backstage app-config.yaml:
   ```yaml
   catalog:
     locations:
       - type: url
         target: https://github.com/bancorocks/rocks.template-api-nodejs/blob/main/template.yaml
         rules:
           - allow: [Template]
   ```

3. Restart your Backstage instance to load the template.

## Using the Template

1. Navigate to your Backstage's Software Templates
2. Select "Node.js Express API with Swagger"
3. Fill in the required parameters:
   - `component_id`: Name of your API component
   - `description`: Brief description of the API
   - `owner`: Team/group that owns the API
   - `system`: System this API belongs to
   - `lifecycle`: Application lifecycle (experimental/production)
   - `port`: Port number for the API
   - `repoUrl`: GitHub repository URL

Example parameters:
```yaml
component_id: user-service-api
description: User management service API
owner: team-platform
system: user-management
lifecycle: experimental
port: 3000
repoUrl: bancorocks/user-service-api
```

## Generated Project Structure

```
my-api/
├── src/
│   ├── routes/
│   │   ├── health.js
│   │   └── ping.js
│   ├── openapi.yaml
│   └── index.js
├── catalog-info.yaml
├── package.json
└── README.md
```

## Responsible Team

This template is maintained by the Platform Team at bancorocks. For questions, issues, or suggestions:

- **GitHub**: [bancorocks/bancorocks-template-api-nodejs](https://github.com/bancorocks/bancorocks-template-api-nodejs)
- **Team**: Platform Team
- **Organization**: bancorocks

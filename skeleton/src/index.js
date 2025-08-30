const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

const healthRouter = require('./routes/health');
const pingRouter = require('./routes/ping');

const app = express();
const port = process.env.PORT || ${{values.port}};

// Load OpenAPI spec
const openApiPath = path.join(__dirname, 'docs/openapi.yaml');
const openApiSpec = yaml.load(fs.readFileSync(openApiPath, 'utf8'));

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use('/ping', pingRouter);

// Swagger UI
app.use('/docs', swaggerUi.serve);
app.get('/docs', swaggerUi.setup(openApiSpec));

// Serve OpenAPI spec directly
app.get('/docs/openapi.yaml', (req, res) => {
  res.sendFile(openApiPath);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`API documentation available at http://localhost:${port}/docs`);
});

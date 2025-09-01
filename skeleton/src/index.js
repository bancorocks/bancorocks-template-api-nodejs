const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const healthRouter = require('./routes/health');
const pingRouter = require('./routes/ping');

const app = express();
const port = process.env.PORT || ${{values.port}};

// Load OpenAPI spec
const openApiPath = path.join(__dirname, "openapi.yaml");
const openApiContent = fs.readFileSync(openApiPath, "utf8");
const swaggerDocument = yaml.load(openApiContent);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use('/ping', pingRouter);

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`API documentation available at http://localhost:${port}/docs`);
});

module.exports = app;
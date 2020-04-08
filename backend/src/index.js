const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * HTTPS Methods:
 * 
 * GET: Read/Query info from backedn
 * POST: Create into into the backend
 * PUT: Modify info in the backend
 * DELETE: Delete info in the backend 
 */

/**
 * Parameters types:
 * 
 * Query: Named Parameters sent to the route after "?" (Filters, pagination)
 * Route Params: Parameters to identify resources
 * Request Body: Creates or alter resources
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: Official package SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */

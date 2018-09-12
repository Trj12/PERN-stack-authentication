const {Pool} =require('pg');
const db_config = require('./secrets/db_configurations');
const pool = new Pool(db_config);
module.exports=pool;
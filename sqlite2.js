/**
 * Created by abc on 08/02/2017.
 */

//ipmort sqlite library
var sqlite3 = require("sqlite3").verbose();

//database connection open
var db = new sqlite3.Database("abc.db");
console.log(db);






db.close();
/**
 * Created by abc on 08/02/2017.
 */

var sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("abcd.db");

db.serialize( function () {
    //creat table

    var csql1 = "create table if not exists school(firstName text, lastName text, Id integer)";

    var dataSchool ="insert into school values('Sunil', 'Mondal', 01)";
    for(i=1; i<=10; i++){
        db.run(dataSchool);

    }

})

db.close();
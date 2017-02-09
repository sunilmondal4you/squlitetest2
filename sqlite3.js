/**
 * Created by abc on 08/02/2017.
 */

var sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("abcd.db");

db.serialize( function () {
    //creat table
    var csql = "create table if not exists Abc(firstName text)";

    var csql1 = "create table if not exists userDetail(firstName text)";
    var csql1 = "create table if not exists school(firstName text, lastName text, Id integer)";

    var dataSchool ="insert into school values('Sunil', 'Mondal', 01)";

    db.run(dataSchool);

});

db.close();

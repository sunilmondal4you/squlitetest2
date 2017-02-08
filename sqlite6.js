/**
 * Created by abc on 08/02/2017.
 */

var sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("abcd.db");

db.serialize( function () {
    //creat table

    var csql1 = "create table if not exists company(firstName text, lastName text, id integer, email text)";
    db.run(csql1);

    var companyData ="insert into company(firstName, lastName, id, email) values($firstName, $lastName, $id, $email)";

    for(i=1; i<=10; i++){
        db.run(companyData,{$firstName:'Sunil', $lastName:'Mondai', $id:007, $email:'sunilmondal4you@gamil.com'});

    }

});

db.close();
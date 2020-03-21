var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        var querystring = "SELECT * FROM ??"
        connection.query(querystring,[tableInput],function(err, result) {
            if (err) throw err;
            cb(result);
        });

    },
    updateOne: function(tableInput, newBurger, id, cb){
        var querystring = "UPDATE ?? SET burger = ? WHER id = ?"
        connection.query(querystring, [tableInput,newBurger,id], function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, newBurger, cb) {
        var querystring = "INSERT INTO ?? (burger) VALUES ?"
        connection.query(querystring, [tableInput, newBurger], function(err,result){
            if (err) throw err;
            cb(result);
        })
    }
}
module.exports = orm;
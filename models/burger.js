var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    },
    updateOne: function(newBurger,id,cb){
        orm.updateOne("burgers", newBurger, id, function(res){
            cb(res);
        });
    },
    insertOne: function(newBurger,cb){
        orm.updateOne("burgers", newBurger, function(res){
            cb(res);
        });
    },
}

module.exports = burger;
const db = require("./dbconfig");

module.exports = {
    findDonationByID,
    findById,
}

function findById(id){
    return db("fundraiser").where({ id }).first();
}
function findDonationByID(id){
    return db("donation").where({id})
}

const db = require("./dbconfig");

module.exports = {
    findDonationByID,
    findById,
    getDonationTotalByID
}

function findById(id){
    return db("fundraiser").where("ownerid", "=", id);
}
function findDonationByID(id){
    return db("donation").where("donorid", "=" , id)
}
function getDonationTotalByID(id){
    return db('donation').where("funderid", "=" , id)
}
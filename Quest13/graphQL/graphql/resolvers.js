const {getAllUserInfor, getUserInfor} = require('./db.js'); 

const resolvers = {
    Query: {
        //named by resolvers => named by declared
        getAllUserInfor: () => getAllUserInfor(),
        getUserInfor: (_, {ID}) => getUserInfor(ID)
    }
}

module.exports = resolvers;
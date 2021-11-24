const {getAllUserInfor, getUserInfor, setUserData} = require('./db.js'); 

const resolvers = {
    Query: {
        //named by resolvers => named by declared
        getAllUserInfor: () => getAllUserInfor(),
        getUserInfor: (_, {userID}) => getUserInfor(userID),
        setUserData: (_, {userID, userPW}) => setUserData(userID, userPW)
    }
}

module.exports = resolvers;
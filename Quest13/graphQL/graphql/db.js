let userDB = [
    {
        index: 1,
        ID: "hyokyun",
        PW: "HI"
    },
    {
        index: 2,
        ID: "chulsoo",
        PW: "HELLO"
    },
    {
        index: 3,
        ID: "minsoo",
        PW: "NICE"
    }
]

module.exports = {
    userDB,
    
    getAllUserInfor: () => {
        return userDB;
    },

    getUserInfor: (ID) => {
        const filteredDB = userDB.filter((list) => ID === list.ID);
        console.log(filteredDB);
        return filteredDB[0];
    }
}
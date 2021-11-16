const user1 = {
    ID: '1',
    PW: 123
}

const user2 = {
    ID: '2',
    PW: 123
}

const user3 = {
    ID: '3',
    PW: 123
}

function user(){
    localStorage.setItem('user1', user1);
    localStorage.setItem('user1', user2);
    localStorage.setItem('user1', user3);
}

module.exports = {user1, user2, user3, user};
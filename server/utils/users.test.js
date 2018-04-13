const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Tech Staff'   
        },{
            id: '2',
            name: 'Pat',
            room: 'Tech Staff'   
        },{
            id: '3',
            name: 'Sam',
            room: 'Book Club'   
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 'asdfsdd',
            name: 'Pat',
            room: 'Office'
        };
        var res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toMatchObject([user]);
    });
    it('should return names for Tech Staff', () => {
        var userList = users.getUserList('Tech Staff');
        expect(userList).toMatchObject(['Mike', 'Pat']);
    });
    it('should return names for Book Club', () => {
        var userList = users.getUserList('Book Club');
        expect(userList).toMatchObject(['Sam']);
    });
    it('should get user by id', () => {
        var userId = '1';
        var user = users.getUser(userId);
        expect(user).toMatchObject({
            id: '1',
            name: 'Mike',
            room: 'Tech Staff'   
        });
        expect(user.id).toBe(userId);
    });
    it('should not find user with invalid id', () => {
        var user = users.getUser('99');
        expect(user).toBe(undefined);
    });
    it('should remove a user by id', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });
    it('should not remove a user by id', () => {
        var userId = '11';
        var user = users.removeUser(userId);
        expect(user).toBe(undefined);
        expect(users.users.length).toBe(3);
    });
});
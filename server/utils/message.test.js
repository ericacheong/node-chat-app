var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'jan';
        var text = 'a message from jan';
        var res = generateMessage(from, text);
        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(typeof res.createdAt).toBe('number');
    });
});
describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'jan';
        var lat = 15;
        var lng = 14;
        var url = 'https://www.google.com/maps?q=15,14';
        var msg = generateLocationMessage(from, lat, lng);
        expect(msg.from).toBe(from);
        expect(msg.url).toBe(url);
        expect(typeof msg.createdAt).toBe('number'); 
    })
})
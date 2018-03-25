const expect = require("expect");
const {generateMessage} = require("./message");

describe("generate Message", ()=>{

    it("should generate correct message object", ()=>{
        let from = "vipin.sharma@gmail.com";
        let text = "this is a test";
        let createdAt = new Date().getTime();

        let message = generateMessage(from, text, createdAt);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});
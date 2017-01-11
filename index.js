var login = require("facebook-chat-api");
var answerThreads = {};

// Create simple echo bot
login({email: "harryng.nz@gmail.com", password: "harrytestharrytest"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
    	console.log(message.threadID);
    	if(!answerThreads.hasOwnProperty(message.threadID)){
    		answerThreads[message.threadID]=true;
    		api.sendMessage("Hey, i am a chat bot", message.threadID);

    	}

        //api.sendMessage(message.body, message.threadID);
    });
});

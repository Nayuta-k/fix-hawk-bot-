
module.exports.run = async (Discord, client, message, args) => {

    roll();

		if (randnum<100){
			message.reply("You got " + randnum + " !");
		} else {
			message.reply('Wow nice you got ' + randnum)
		}

}

function roll(min, max){
	min = Math.ceil(0);
	max = Math.floor(100);
	randnum = Math.floor(Math.random() * (max - min + 1) + min);
}
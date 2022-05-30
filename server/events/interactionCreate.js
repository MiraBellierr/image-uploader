const fs = require("fs");

module.exports = async (client, interaction) => {
	if (interaction.isModalSubmit()) {
		const poem = {
			title: null,
			body: null,
		};

		poem.title = interaction.fields.getTextInputValue("poemTitle");
		poem.body = interaction.fields.getTextInputValue("poemBody").split("\n");

		fs.writeFile("../poem.json", JSON.stringify(poem, null, 2), (err) => {
			if (err) return console.log(err);

			interaction.reply(`Updated`);
		});
	}

	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	if (!client.commands.has(interaction.commandName)) return;

	try {
		if (command) {
			command.run(client, interaction);
		}
	} catch (err) {
		console.error(err);
		interaction.reply(
			"There was an error trying to interact with this command."
		);
	}
};

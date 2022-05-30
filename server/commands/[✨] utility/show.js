const path = require("path");

module.exports = {
	name: "show",
	description: "Show the poem",
	category: "[✨] utility",
	run: async (client, interaction) => {
		path.exists(`../../../poems/${interaction.user.id}.php`, (exists) => {
			if (exists) {
				return interaction.reply(
					`https://miraiscute.com/poems/${interaction.user.id}`
				);
			}

			return interaction.reply("You haven't create any poem yet");
		});
	},
};

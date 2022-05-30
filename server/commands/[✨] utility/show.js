const fs = require("fs");

module.exports = {
	name: "show",
	description: "Show the poem",
	category: "[✨] utility",
	run: async (client, interaction) => {
		interaction.reply(`https://miraiscute.com/poems/${interaction.user.id}`);
	},
};

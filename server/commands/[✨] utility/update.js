const Discord = require("discord.js");

module.exports = {
	name: "update",
	description: "update poem",
	category: "[✨] utility",
	run: async (client, interaction) => {
		const modal = new Discord.Modal()
			.setCustomId("poemModal")
			.setTitle("Poem Update");

		const title = new Discord.TextInputComponent()
			.setCustomId("poemTitle")
			.setLabel("Poem Title")
			.setStyle("SHORT");

		const body = new Discord.TextInputComponent()
			.setCustomId("poemBody")
			.setLabel("Poem Body")
			.setStyle("PARAGRAPH");

		modal.addComponents(
			new Discord.MessageActionRow().addComponents(title),
			new Discord.MessageActionRow().addComponents(body)
		);

		await interaction.showModal(modal);
	},
};

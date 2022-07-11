const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v8");
const fs = require("fs");

module.exports = {
	reloadMemberCount: async function (client) {
		const kannaGuild = await client.guilds.fetch("864537979339014184");
		const totalChannel = await client.channels.fetch("874265763870019654");
		const humanChannel = await client.channels.cache.get("874265294770696282");
		const botChannel = await client.channels.fetch("874265902328193044");
		const members = await kannaGuild.members.fetch();
		const human = members.filter((member) => !member.user.bot).size;
		const bots = kannaGuild.memberCount - human;
		totalChannel.edit({
			name: `❔┊Total: ${kannaGuild.memberCount.toLocaleString()}`,
		});
		humanChannel.edit({ name: `👥┊Human: ${human.toLocaleString()}` });
		botChannel.edit({ name: `🤖┊Bots: ${bots.toLocaleString()}` });

		return console.log("counter updated");
	},
	shuffleArray: function (array) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex !== 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	},
	registerCommands: async function (client, guildId) {
		// eslint-disable-next-line no-unused-vars
		const commands = client.commands.map(({ run, category, ...data }) => data);

		const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

		(async () => {
			try {
				console.log("Started refreshing application (/) commands.");

				await rest.put(
					Routes.applicationGuildCommands(client.user.id, guildId),
					{ body: commands }
				);

				console.log(
					`Successfully reloaded application (/) commands for ${guildId}`
				);
			} catch (error) {
				console.error(error);
			}
		})();
	},
	formatDate: function (date) {
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC",
		};
		return new Intl.DateTimeFormat("en-US", options).format(date);
	},
	writeFile: function (interaction) {
		const content = `<?php
		$file = '../json/${interaction.user.id}.json';
		$data = file_get_contents($file);
		$obj = json_decode($data);
		$title = $obj->title;
		$body = $obj->body;
		$center = $obj->center;
		?>
		
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="theme-color" content="#EE82EE" />
				<meta content="Mira | Poem of the day" property="og:title" />
				<meta content="Poem of the day by ${interaction.user.username}" property="og:description" />
				<meta content="miraiscute.com" property="og:site_name" />
				<meta
					content="https://cdn.discordapp.com/attachments/873441703330185250/968450734175686666/flower-pot.png"
					property="og:image"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="miraiscute.com" />
				<meta name="twitter:creator" content="mira" />
				<meta name="twitter:title" content="Mira | Poem of the day" />
				<meta name="twitter:description" content="Poem of the day by ${interaction.user.username}" />
				<meta
					name="twitter:image"
					content="https://cdn.discordapp.com/attachments/873441703330185250/968450734175686666/flower-pot.png"
				/>
				<title>Mira | Poem of the day</title>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="../flower-pot-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="../flower-pot-16x16.png"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Alegreya:ital@1&display=swap"
					rel="stylesheet"
				/>
				<style>
				* {
					font-family: "Alegreya", serif;
					margin: 0;
					padding: 0;
				}
	
				body {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
					text-align: center;
					background: url("landscape-1653900045565-3997.jpg") no-repeat center center/ cover;
	
				}
				
				.inter {
					padding: 50px;
					background-color: rgba(0, 0, 0, 0.5);
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
					border-radius: 10px;
				}
				</style>
				<script src="https://cdn.tailwindcss.com"></script>
			</head>
			<body>
				<div
					class="flex justify-center items-center text-center min-h-screen flex-col"
				>
					<h2 class="font-bold text-3xl text-white"><?php echo $title ?></h2>
					<br />
					<?php 
						foreach ($body as $line) {
							echo "<p class='italic text-lg text-white'>".$line."</p>";
						}
					?>
				</div>
			</body>
		</html>
		`;

		fs.writeFile(`../poems/${interaction.user.id}.php`, content, (err) => {
			if (err) return console.log(err);
		});
	},
};

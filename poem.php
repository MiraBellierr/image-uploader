<?php
$file = 'json/548050617889980426.json';
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
		<meta content="Poem of the day by Mira" property="og:description" />
		<meta content="miraiscute.com" property="og:site_name" />
		<meta
			content="https://cdn.discordapp.com/attachments/873441703330185250/968450734175686666/flower-pot.png"
			property="og:image"
		/>
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:site" content="miraiscute.com" />
		<meta name="twitter:creator" content="mira" />
		<meta name="twitter:title" content="Mira | Poem of the day" />
		<meta name="twitter:description" content="Poem of the day by F.s. Yousaf" />
		<meta
			name="twitter:image"
			content="https://cdn.discordapp.com/attachments/873441703330185250/968450734175686666/flower-pot.png"
		/>
		<title>Mira | Poem of the day</title>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="flower-pot-32x32.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="flower-pot-16x16.png"
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
				text-align: center;
				background: url("landscape-1653900045565-3997.jpg") no-repeat center center/cover;

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
			class="outer flex justify-center items-center text-center min-h-screen flex-col"
		>
			<div class="inter">
				<h2 class="font-bold text-3xl text-white"><?php echo $title ?></h2>
				<br />
				<?php 
					foreach ($body as $line) {
						if (trim($line) == "") {
							echo "<br />";
						} else {
							echo "<p class='italic text-lg text-white'>".$line."</p>";
						}
					}
				?>
			</div>
		</div>
	</body>
</html>

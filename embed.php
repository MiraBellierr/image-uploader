<?php 
include 'engine.php';
?>

<!DOCTYPE html>
<html>
    <head>
        <title> Mira | Image Uploader</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:image" content="<?php echo $link;?>">
        <meta name="theme-color" content="#FF1493">
        <link rel="icon" type="image/png" sizes="32x32" href="flower-pot-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="flower-pot-16x16.png">
        <link type="application/json+oembed" href="https://<?php echo $host;?>/json?<?php echo $query;?>">
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="h-14 bg-gradient-to-r from-purple-500 to-pink-500">
        <nav
			class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg"
		>
			<div
				class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
			>
				<div class="container-fluid">
					<a class="text-xl text-black font-semibold" href="/"
						>File Uploader By Mira</a>
					>
				</div>
			</div>
		</nav>
        <div class="flex justify-center mt-10">
            <img src="<?php echo $link;?>" width="410"><br>
        </div>
        <div class="flex justify-center mt-3">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span><a href="<?php echo $link;?>" download>Download</a></span>
            </button>

        </div>
        <div class="flex justify-center mt-3">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"> 
                <span><a href="/">Go back</a></span> 
            </button>
        </div>

        <script>
            async function downloadImage(imageSrc) {
                const image = await fetch(imageSrc) 
                const imageBlog = await image.blob() 
                const imageURL = URL.createObjectURL(imageBlog) 
                const link = document.createElement('a') 

                link.href = imageURL 
                link.download = 'image file name here' 
                document.body.appendChild(link) 
                link.click() 
                document.body.removeChild(link)
            }
        </script>
    </body>
</html>

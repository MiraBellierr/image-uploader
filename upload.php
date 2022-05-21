
<?php
function generateRandomString($length = 6) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }

    return $randomString;
}

$result = "unknown";
$string = generateRandomString();
$target_dir = "up/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$temp = explode(".", $_FILES["fileToUpload"]["name"]);
$newfile = $string . '.' . end($temp);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
}

if ($_FILES["fileToUpload"]["size"] > 100000000) {
    $result = "Sorry, your file is too large.";
    $uploadOk = 0;
}

if($imageFileType != "mp4" && $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "webp" && $imageFileType != "gif" ) {
    $result = "Sorry, only JPG, JPEG, PNG, WEBP, GIF & MP4 files are allowed.";
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    $result = "Sorry, your file was not uploaded.";
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_dir . $newfile)) {
        if ($imageFileType == "mp4") {
            if ($_POST['key'] == "sharex") {
                echo "https://miraiscute.com/up/$newfile";
                return;
            }
            $result = "https://miraiscute.com/up/$newfile";
            echo '<html>
            <head>
                <title> Mira | Image Uploader</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#EE82EE" />
                <meta content="Mira | Image Uploader" property="og:title" />
                <meta content="Image uploader made by Mira" property="og:description" />
                <meta content="miraiscute.com" property="og:site_name" />
                <meta
                    content="https://cdn.discordapp.com/attachments/873441703330185250/968450734175686666/flower-pot.png"
                    property="og:image"
                />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="miraiscute.com" />
                <meta name="twitter:creator" content="mira" />
                <meta name="twitter:title" content="Mira | Image Uploader" />
                <meta name="twitter:description" content="Image uploader made by Mira" />
                <meta
                    name="twitter:image"
                    content="https://cdn.discordapp.com/attachments/873441703330185250/968450734175686666/flower-pot.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="flower-pot-32x32.png">
                <link rel="icon" type="image/png" sizes="16x16" href="flower-pot-16x16.png">
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
                                >File Uploader By Mira</a
                            >
                        </div>
                    </div>
                </nav>
                <div class="flex justify-center mt-3">
                <label id ="copied">Click to copy:</label>
                </div>
                <div class="flex justify-center">
                
                    <button onclick="copy()" id="text" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">'.$result.'</button>
                </div>
                <div class="flex justify-center">
                
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><a href="/">Upload Another Image</a></button>
                </div>
        
                <script>
                    function copy() {
                        var myText = document.createElement("textarea")
                        myText.value = document.getElementById("text").innerHTML;
                        document.body.appendChild(myText)
                        myText.focus();
                        myText.select();
                        document.execCommand(\'copy\');
                        document.body.removeChild(myText);
                        document.getElementById("copied").innerHTML = "Copied!";
                    }
                </script>
            </body>
        </html>
        ';
        } else {
            if ($_POST['key'] == 'sharex') {
                echo "https://miraiscute.com/$newfile";
                return;
            }
            $result = "https://miraiscute.com/$newfile";

            echo '<html>
            <head>
                <title> Mira | Image Uploader</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#EE82EE" />
                <meta content="Mira | Image Uploader" property="og:title" />
                <meta content="Image uploader made by Mira" property="og:description" />
                <meta content="miraiscute.com" property="og:site_name" />
                <meta
                    content="https://cdn.discordapp.com/attachments/873441703330185250/968450734175686666/flower-pot.png"
                    property="og:image"
                />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="miraiscute.com" />
                <meta name="twitter:creator" content="mira" />
                <meta name="twitter:title" content="Mira | Image Uploader" />
                <meta name="twitter:description" content="Image uploader made by Mira" />
                <meta
                    name="twitter:image"
                    content="https://cdn.discordapp.com/attachments/873441703330185250/968450734175686666/flower-pot.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="flower-pot-32x32.png">
                <link rel="icon" type="image/png" sizes="16x16" href="flower-pot-16x16.png">
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
                                >File Uploader By Mira</a
                            >
                        </div>
                    </div>
                </nav>
                <div class="flex justify-center mt-3">
                <label id ="copied">Click to copy:</label>
                </div>
                <div class="flex justify-center mt-3">
                
                    <button onclick="copy()" id="text" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">'.$result.'</button>
                </div>
                <div class="flex justify-center mt-3">
                
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><a href="/">Upload Another Image</a></button>
                </div>
        
                <script>
                    function copy() {
                        var myText = document.createElement("textarea")
                        myText.value = document.getElementById("text").innerHTML;
                        document.body.appendChild(myText)
                        myText.focus();
                        myText.select();
                        document.execCommand(\'copy\');
                        document.body.removeChild(myText);
                        document.getElementById("copied").innerHTML = "Copied!";
                    }
                </script>
            </body>
        </html>
        ';
        }
    } else {
        $result = "Sorry, there was an error uploading your file.";
    }
}
?>



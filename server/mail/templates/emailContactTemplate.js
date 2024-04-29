

const emailContactTemplate = (firstName,lastName,email,message)=>{
    return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
		</style>
	
	</head>
	
	<body>
		<div class="container">
        <a href=""><img class="logo"
        src="https://res.cloudinary.com/dt0h4tmbm/image/upload/v1712397474/GAMEBACKEND/tjkz404fe8dlhizxwxty.jpg" alt="Chill Zone Game Logo"></a>
			<div class="message">Chill Zone Game Message</div>
			<div class="body">
				<p>Mail sender name is <h3>" ${firstName}${" "}${lastName} "</h3></p>
				<p>You have New Message from your Chill Zone Gamer Website</p>
				<h4 class="highlight"> Player Email is ${email}</h4>
				<h2>Sender Send a comment that is " ${message} "</h2>
			</div>
			
		</div>
	</body>
	
	</html>`;
};
module.exports = emailContactTemplate;
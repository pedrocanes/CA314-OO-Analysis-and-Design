		
		function startFun(){

		let inLobby = 1;	
		document.getElementById("textField").style.width = "60%";
		document.getElementById("textField").style.height = "9%";

		document.getElementById("enterButton").style.width = "22%";
		document.getElementById("enterButton").style.height = "15%";

		document.getElementById('enterButton').draggable = false;


		//document.getElementById("enterButton").src="./images/ui/enterButtonHover.png"
 		}

 		startFun();

 		function enterButton(){
 			// if (document.getElementById("textField").value.trim() === '') {
 				// return;
 			// }
 				document.getElementById("gameWindow").style.backgroundImage = "url('./images/mainUi/lobby.jpg')";
 				document.getElementById("enterButton").style.display = 'none';
 				document.getElementById("textField").style.display = 'none';
 				inLobby = 0;
 				lobbySetUp(); //from lobby.js
 			}

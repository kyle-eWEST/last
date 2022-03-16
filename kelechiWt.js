document.addEventListener("DOMContentLoaded",()=>{

	// VARIABLES FOR WITHDRAW FUNDS
	const request = document.querySelector("#request");
	const selectCoin = document.querySelector("#select-input");
	const amountToWithdraw = document.querySelector("#amount-input");
	const walletAddressWithdraw = document.querySelector("#wallet-input");
	const withdrawButton = document.querySelector("#submit");

	// DISABLED WITHDRAW FUNDS ELEMENTS
	walletAddressWithdraw.disabled = true;
	withdrawButton.disabled = true;
	withdrawButton.style.background = "#404040";
	withdrawButton.style.color = "#cccccc";


	amountToWithdraw.onkeyup = ()=>{
		if (amountToWithdraw.value.length > 0){
			walletAddressWithdraw.disabled = false;
		}

		else{
			walletAddressWithdraw.disabled = true;
			walletAddressWithdraw.value = "";
			withdrawButton.disabled = true;
			withdrawButton.style.background = "#404040";
			withdrawButton.style.color = "#cccccc";
		}
	}

	amountToWithdraw.onchange = ()=>{
		if (amountToWithdraw.value > 0){
			walletAddressWithdraw.disabled = false;
		}

		else{
			walletAddressWithdraw.disabled = true;
			walletAddressWithdraw.value = "";
			withdrawButton.disabled = true;
			withdrawButton.style.background = "#404040";
			withdrawButton.style.color = "#cccccc";
		}
	}



	selectCoin.onchange = ()=>{
		if (selectCoin.value === "Eth"  && walletAddressWithdraw.value.length >= 5){
			withdrawButton.disabled = false;
			withdrawButton.style.color = "#ffff";
			withdrawButton.style.background = "#00cc00";
			request.style.display = "none";
		}

		else if (selectCoin.value === "Btc" && walletAddressWithdraw.value.length >= 5){
			withdrawButton.disabled = false;
			withdrawButton.style.color = "#ffff";
			withdrawButton.style.background = "#00cc00";
			request.style.display = "none";
		}

		else if (selectCoin.value === "Doge" && walletAddressWithdraw.value.length >= 5){
			withdrawButton.disabled = false;
			withdrawButton.style.color = "#ffff";
			withdrawButton.style.background = "#00cc00";
			request.style.display = "none";
		}

		else if (selectCoin.value === "Usdt" && walletAddressWithdraw.value.length >= 5){
			withdrawButton.disabled = false;
			withdrawButton.style.color = "#ffff";
			withdrawButton.style.background = "#00cc00";
			request.style.display = "none";
		}

		else if(selectCoin.value === "selectcoin"){
			withdrawButton.disabled = true;
			withdrawButton.style.background = "#404040";
			withdrawButton.style.color = "#cccccc";
			request.style.display = "none";
		}

		// HIDE REQUEST SUCCESSFUL !!!
		else if(selectCoin.value === "Eth"){
			request.style.display = "none";
		}

		else if(selectCoin.value === "Btc"){
			request.style.display = "none";
		}

		else if(selectCoin.value === "Doge"){
			request.style.display = "none";
		}

		else if(selectCoin.value === "Usdt"){
			request.style.display = "none";
		}
	}




	walletAddressWithdraw.onkeyup = ()=>{
		if (selectCoin.value === "Eth"  && walletAddressWithdraw.value.length >= 42){
			withdrawButton.disabled = false;
			withdrawButton.style.color = "#ffff";
			withdrawButton.style.background = "#00cc00";
		}

		else if (selectCoin.value === "Btc" && walletAddressWithdraw.value.length >= 42){
			withdrawButton.disabled = false;
			withdrawButton.style.color = "#ffff";
			withdrawButton.style.background = "#00cc00";
		}

		else if (selectCoin.value === "Doge" && walletAddressWithdraw.value.length >= 34){
			withdrawButton.disabled = false;
			withdrawButton.style.color = "#ffff";
			withdrawButton.style.background = "#00cc00";
		}

		else if (selectCoin.value === "Usdt" && walletAddressWithdraw.value.length >= 42){
			withdrawButton.disabled = false;
			withdrawButton.style.color = "#ffff";
			withdrawButton.style.background = "#00cc00";
		}

		else if(selectCoin.value === "selectcoin" || walletAddressWithdraw.value.length <= 42){
			withdrawButton.disabled = true;
			withdrawButton.style.background = "#404040";
			withdrawButton.style.color = "#cccccc";
		}
	}


	withdrawButton.onclick = ()=>{
		request.style.display = "block";
		selectCoin.value = "selectcoin";
		amountToWithdraw.value = "";
		walletAddressWithdraw.value = "";
		withdrawButton.style.background = "#404040";
		withdrawButton.style.color = "#cccccc";
		withdrawButton.disabled = true;
	}








})
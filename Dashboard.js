
document.addEventListener("DOMContentLoaded",()=>{

	//const btnDp = document.querySelector(".btn-dp");
	const coinBtn = document.querySelector(".coin-btn");
	const cardBtn = document.querySelector(".card-btn");
	const link = document.querySelector(".link-dp");
	const checkBox = document.querySelectorAll(".checkbox");
	const amount = document.querySelector(".amount");
	const select = document.querySelector("select");
	const coin = document.querySelectorAll(".coin");
	const linkButton = document.querySelectorAll("button");

	// VARIABLE FOR SENDING COINS
	const sendBtc = document.querySelector("#send-btc");
	const scanCodeSrc = document.querySelector("#img");
	const walletAddress = document.querySelector("#wallet-ad");
	const amountToInvest = document.querySelector("#span-amt");

	// VARIABLES FOR PENDING AND CONFIRM PAYMENT
	const confirm = document.querySelector(".confirm");
	const pending = document.querySelector(".pending");

	// VARIABLES FOR CHECKBOX 1-4 (ALPHA PLANS)
	const checkBoxOne = document.querySelector(".checkbox-1");
	const checkBoxTwo = document.querySelector(".checkbox-2");
	const checkBoxThree = document.querySelector(".checkbox-3");
	const checkBoxFour = document.querySelector(".checkbox-4");


	// VARIABLES FOR FIRST CONTANINER DIV
	const btnDp = document.querySelector(".btn-dp");
	const times = document.querySelector(".times-div");
	const firstContainer = document.querySelector(".first-container");
	const secondContainer = document.querySelector(".second-container");

	


	//SET ELEMENT TO DISABLED
	coinBtn.disabled = true;
	amount.disabled = true;
	select.disabled = true;

	
	// CONDITION TO ACTIVATE/DEACTIVATE ALPHA PLAN A (INPUT)
	checkBoxOne.onclick = ()=>{
		if (checkBoxOne.checked === true){
			amount.disabled = false;
			amount.style.background = "gold";
			checkBoxTwo.checked = false;
			checkBoxThree.checked = false;
			checkBoxFour.checked = false;
		}

		else{
			amount.disabled = true;
			amount.value = "";
			select.value = "select";
			select.disabled = true;
			coinBtn.disabled = true;
			link.disabled = true;
			link.style.display = "none";
			btnDp.style.display = "inline";
			amount.style.background = "#ffff";
		}

	}


	// CONDITION TO ACTIVATE/DEACTIVATE ALPHA PLAN B (INPUT)
	checkBoxTwo.onclick = ()=>{
		if (checkBoxTwo.checked === true){
			amount.disabled = false;
			amount.style.background = "gold";
			checkBoxOne.checked = false;
			checkBoxThree.checked = false;
			checkBoxFour.checked = false;
		}

		else{
			amount.disabled = true;
			amount.value = "";
			select.value = "select";
			select.disabled = true;
			coinBtn.disabled = true;
			link.disabled = true;
			link.style.display = "none";
			btnDp.style.display = "inline";
			amount.style.background = "#ffff";
		}

	}


	// CONDITION TO ACTIVATE/DEACTIVATE ALPHA PLAN C (INPUT)
	checkBoxThree.onclick = ()=>{
		if (checkBoxThree.checked === true){
			amount.disabled = false;
			amount.style.background = "gold";
			checkBoxOne.checked = false;
			checkBoxTwo.checked = false;
			checkBoxFour.checked = false;
		}

		else{
			amount.disabled = true;
			amount.value = "";
			select.value = "select";
			select.disabled = true;
			coinBtn.disabled = true;
			link.disabled = true;
			link.style.display = "none";
			btnDp.style.display = "inline";
			amount.style.background = "#ffff";
		}

	}



	// CONDITION TO ACTIVATE/DEACTIVATE ALPHA PLAN D (INPUT)
	checkBoxFour.onclick = ()=>{
		if (checkBoxFour.checked === true){
			amount.disabled = false;
			amount.style.background = "gold";
			checkBoxOne.checked = false;
			checkBoxTwo.checked = false;
			checkBoxThree.checked = false;
		}

		else{
			amount.disabled = true;
			amount.value = "";
			select.value = "select";
			select.disabled = true;
			coinBtn.disabled = true;
			link.disabled = true;
			link.style.display = "none";
			btnDp.style.display = "inline";
			amount.style.background = "#ffff";
		}

	}



	// DISABLE AND ENABLE SELECT DROPDOWN WHEN YOU TYPE VALUES
	amount.onkeyup = ()=>{

		if (amount.value.length > 0){
			select.disabled = false;
		}
		else{
			select.disabled = true;
			select.value = "select";
		}
	}


	// DISABLE AND ENABLE SELECT DROPDOWN WHEN YOU CHANGE VALUES
	amount.onchange = ()=>{

		if (amount.value >= 1 ){
			select.disabled = false;
		}
		else{
			select.disabled = true;
			select.value = "select";
		}
	}



	select.onchange = ()=>{

		if (select.value === "eth"){
			coinBtn.disabled = false;
			sendBtc.innerHTML = "SEND YOUR ETH";
			scanCodeSrc.src = "eth.jpg";
			walletAddress.innerHTML = "0x3B7BF7d8765dFFa0EAbEe935d6C273B4a20AAc83";
			amountToInvest.innerHTML = amount.value;
		}

		else if (select.value === "btc"){
			coinBtn.disabled = false;
			sendBtc.innerHTML = "SEND YOUR BTC";
			scanCodeSrc.src = "btc.jpg";
			walletAddress.innerHTML = "bc1qs5rzg8699vmpgz29gp952vrrsf9gjfydxeulr7";
			amountToInvest.innerHTML = amount.value;
		}

		else if (select.value === "doge"){
			coinBtn.disabled = false;
			sendBtc.innerHTML = "SEND YOUR DOGE";
			scanCodeSrc.src = "doge.jpg";
			walletAddress.innerHTML = "DTuU2j4pNonLMmrnzF23DxhHxD2dmJB8Qa";
			amountToInvest.innerHTML = amount.value;
		}

		else if (select.value === "usdt"){
			coinBtn.disabled = false;
			sendBtc.innerHTML = "SEND YOUR USDT";
			scanCodeSrc.src = "usdt.jpg";
			walletAddress.innerHTML = "0x3B7BF7d8765dFFa0EAbEe935d6C273B4a20AAc83";
			amountToInvest.innerHTML = amount.value;
		}


		else if (select.value === "master" || select.value === "visa"){
			btnDp.style.display = "none";
			link.style.display = "inline";
		}
		else{
			select.value = "select";
			const selectOpt = select.value;
			if (selectOpt){
				coinBtn.disabled = true;
				link.disabled = true;
			}
		}
	}




	confirm.onclick = ()=>{
		pending.style.display = "block";
		pending.innerHTML = "PENDING";
	}


	btnDp.onclick = ()=>{
		amount.value = "";
		select.value = "select";
		select.disabled = true;
		coinBtn.disabled = true;
		link.style.display = "none";
		btnDp.style.display = "inline";
		
		firstContainer.style.display = "block";
		secondContainer.style.display = "none";	
	}



	link.onclick = ()=>{
		amount.value = "";
		select.value = "select";
		select.disabled = true;
		coinBtn.disabled = true;
		link.style.display = "none";
		btnDp.style.display = "inline";
	} 


	times.onclick = ()=>{
		if(firstContainer.style.display === "block"){
			pending.style.display = "none";
			firstContainer.style.display = "none";
			secondContainer.style.display = "block";
		}
		else{
		secondContainer.style.display = "block";
		firstContainer.style.display = "none";
		}

	}


	



	

	//variables for pops related divs
	depositDiv = document.querySelector(".dp-div");
	withdrawDiv = document.querySelector(".wt-div");
	//depositPop = document.querySelector("#pop-dp");
	withdrawPop = document.querySelector("#pop-wt");
	height = document.querySelector(".section3-ht");

	//call-back function to close pop divs
	function closeDp(){
		//depositPop.style.display = "none";
		//withdrawPop.style.display = "none";
		height.style.height = "75px";
		depositDiv.style.background = "none";
		withdrawDiv.style.background = "none";
		//menuBody.style.display = "none";
		//dpDv.style.display = "none";
		//wtDv.style.display = "none";
	}

	//conditions
	depositDiv.onclick = ()=>{
		if(depositPop.style.display === "none"){
			depositPop.style.display = "block";
			withdrawPop.style.display = "none";
			height.style.height = "165px";
			depositDiv.style.background = "white";
			withdrawDiv.style.background = "none";
		}
		else{
			depositPop.style.display = "none";
			height.style.height = "75px";
			depositDiv.style.background = "none";
			withdrawDiv.style.background = "none";
		}
	}

	withdrawDiv.onclick = ()=>{
		if(withdrawPop.style.display === "none"){
			withdrawPop.style.display = "block";
			depositPop.style.display = "none";
			height.style.height = "165px";
			withdrawDiv.style.background = "white";
			depositDiv.style.background = "none";
		}
		else{
			withdrawPop.style.display = "none";
			height.style.height = "75px";
			withdrawDiv.style.background = "none";
			depositDiv.style.background = "none";
		}
	}

	//click on HTML DOM to close pops
	section1 = document.querySelector("#section1");
	section1.onclick = closeDp;
	section2 = document.querySelector("#section2");
	section2.onclick = closeDp;
	section4 = document.querySelector("#section4");
	section4.onclick = closeDp;
	section5 = document.querySelector("#section5");
	//section5.onclick = closeDp;
	section6 = document.querySelector("#section6");
	//section6.onclick = closeDp;
	section7 = document.querySelector("#section7");
	//section7.onclick = closeDp;
	section8 = document.querySelector("#section8");
	//section8.onclick = closeDp;
	section9 = document.querySelector("#section9");
	section9.onclick = closeDp;



	
	





})

		//functions for my MENU button
		/*function openNav() {
	 		document.getElementById("myNav").style.height = "100%";
	 		closeDp;
		}

		function closeNav() {
	 		document.getElementById("myNav").style.height = "0%";
		}*/


		/* 
		if (select.value === "eth"){
			coinBtn.disabled = false;
			sendBtc.innerHtml = "SEND YOUR ETH";
			scanCodeSrc.src = "eth.jpg";
			walletAddress.innerHtml = "0x3B7BF7d8765dFFa0EAbEe935d6C273B4a20AAc83";
			amountToInvest.innerHtml = amount.value;
		}

		else if (select.value === "btc"){
			coinBtn.disabled = false;
			sendBtc.innerHtml = "SEND YOUR BTC";
			scanCodeSrc.src = "btc.jpg";
			walletAddress.innerHtml = "bc1qs5rzg8699vmpgz29gp952vrrsf9gjfydxeulr7";
			amountToInvest.innerHtml = amount.value;
		}

		else if (select.value === "doge"){
			coinBtn.disabled = false;
			sendBtc.innerHtml = "SEND YOUR DOGE";
			scanCodeSrc.src = "doge.jpg";
			walletAddress.innerHtml = "DTuU2j4pNonLMmrnzF23DxhHxD2dmjB8Qa";
			amountToInvest.innerHtml = amount.value;
		}
		*/
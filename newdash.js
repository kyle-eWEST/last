
document.addEventListener("DOMContentLoaded",()=>{
	// VARIABLES FOR SECTION3-MB
	const menuBtn = document.querySelector(".pointer-div");
	const menuBody = document.querySelector(".section3-hts");
	const dpH6 = document.querySelector(".dp-h6");
	const wtH6 = document.querySelector(".wt-h6");
	const dpDv = document.querySelector(".dp-dv");
	const wtDv = document.querySelector(".wt-dv");


	// CONDITIONS FOR ONCLICK
	menuBtn.onclick = ()=>{
		if(menuBody.style.display === "none"){
			menuBody.style.display = "block";
		}
		else{
			menuBody.style.display = "none";
		}
	}

	dpH6.onclick = ()=>{
		if(dpDv.style.display === "none"){
			dpDv.style.display = "block";
			wtDv.style.display = "none";
		}
		else{
			dpDv.style.display = "none";
			wtDv.style.display = "none";
		}
	}

	wtH6.onclick = ()=>{
		if(wtDv.style.display === "none"){
			wtDv.style.display = "block";
			dpDv.style.display = "none";
		}
		else{
			wtDv.style.display = "none";
			dpDv.style.display = "none";
		}
	}

	
	


	/*
	btnDp.onclick = ()=>{
		firstContainer.style.display = "block";


		if (select.value === "eth"){
				
				amount.value = "";
				select.value = "select";
				select.disabled = true;
				coinBtn.disabled = true;
				link.style.display = "none";
				btnDp.style.display = "inline";

				sendBtc.innerHtml = "SEND YOUR ETH";
				scanCodeSrc.src = "eth.jpg";
				walletAddress.innerHtml = "0x3B7BF7d8765dFFa0EAbEe935d6C273B4a20AAc83";
				amountToInvest.innerHtml = amount.value;
			}

			else if (select.value === "btc"){
				
				amount.value = "";
				select.value = "select";
				select.disabled = true;
				coinBtn.disabled = true;
				link.style.display = "none";
				btnDp.style.display = "inline";

				sendBtc.innerHtml = "SEND YOUR BTC";
				scanCodeSrc.src = "btc.jpg";
				walletAddress.innerHtml = "bc1qs5rzg8699vmpgz29gp952vrrsf9gjfydxeulr7";
				amountToInvest.innerHtml = amount.value;
			}

			else if (select.value === "doge"){
				
				amount.value = "";
				select.value = "select";
				select.disabled = true;
				coinBtn.disabled = true;
				link.style.display = "none";
				btnDp.style.display = "inline";

				sendBtc.innerHtml = "SEND YOUR DOGE";
				scanCodeSrc.src = "doge.jpg";
				walletAddress.innerHtml = "DTuU2j4pNonLMmrnzF23DxhHxD2dmJB8Qa";
				amountToInvest.innerHtml = amount.value;
			}

			secondContainer.style.display = "none";
	}

	times.onclick = ()=>{
		if(firstContainer.style.display === "block"){
			firstContainer.style.display = "none";
			secondContainer.style.display = "block";
		}
		else{
		secondContainer.style.display = "block";
		firstContainer.style.display = "none";
		}

	}
	*/



	
});

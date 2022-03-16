document.addEventListener("DOMContentLoaded",()=>{
	const inputAll = document.querySelectorAll(".input");
	const selectCountry = document.querySelectorAll(".country");
	const selectOccupation = document.querySelectorAll(".occupation");
	const form = document.querySelector(".form");
	const updateProfile = document.querySelector(".profile-btn");
	const profileSuccessful = document.querySelector("#profile-ud");


	form.onsubmit = ()=>{

		inputAll.forEach(function(input){
			if(input.value === "" || input.value.length < 1 || selectOccupation.value === "select" || selectCountry === "select"){
				profileSuccessful.style.display = "block";
				profileSuccessful.innerHTML = "Can't Update Profile, Fill in all Fields!!!";
			}


			else if(input.value !== "" && input.value.length > 0 && selectOccupation.value !== "select" && selectCountry !== "select"){
				profileSuccessful.style.display = "block";
				profileSuccessful.innerHTML = "Profile Updated Successfully!!!";
				input.value ="";
			}

			/*input.onkeyup = ()=>{
				if(input.value.length === 0 || input.value === "" || selectOccupation.value === "select" || selectCountry === "select"){
					profileSuccessful.style.display = "block";
					profileSuccessful.innerHTML = "Can't Update Profile, Fill in all Fields!!!";
				}
			} */
		})

		// PREVENT SUMBMITION
		return false;

	}

});
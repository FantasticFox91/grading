const range=document.querySelector("#range"),rangeValues=[document.querySelector(".range__input--min"),document.querySelector(".range__input--max")];range.innerHTML="",range.classList.toggle("range"),noUiSlider.create(range,{start:[0,900],connect:[!1,!0,!1],step:25,range:{min:[0],max:[1050]}}),rangeValues.forEach((function(e,n){e.addEventListener("change",(function(){range.noUiSlider.setHandle(n,this.value)}))})),range.noUiSlider.on("update",(function(e,n){rangeValues[n].value=Math.floor(e[n])}));
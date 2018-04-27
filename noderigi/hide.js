function searchFunction(){
	var searchValue = document.getElementById("search");
	var putni = document.getElementsByName("putns");
	for (var i = 0; i < 12; i++){
		var j = searchValue.value.length;
		if ((searchValue.value.substr(0, j) == putni[i].getAttribute('value').substr(0, j))||(searchValue.value.substr(0, j) == putni[i].getAttribute('id').substr(0, j))){
			document.getElementsByName("putns")[i].style.opacity = "1";
			document.getElementsByName("putns")[i].style.cursor = "pointer";
		}
		else {
			document.getElementsByName("putns")[i].style.opacity = "0.2";
			document.getElementsByName("putns")[i].style.cursor = "default";
		}
	}
}

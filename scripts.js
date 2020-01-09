

function selectClass(x) {
   element = document.getElementById(x.id);
	var x = document.getElementsByClassName("class");     
	for (var i = 0; i < x.length; i++)
	{
		element2 = document.getElementById(x[i].id);
		if (element2 .classList.contains("selectedClass")) {
		element2.classList.remove("selectedClass");
	}
	}
	 document.getElementById("modeContainer").style.display = "Inline";
   
	element.classList.add("selectedClass");
};


function meeting(x) {
   element = document.getElementById(x.id);
	var x = document.getElementsByClassName("type");     
	for (var i = 0; i < x.length; i++)
	{
		element2 = document.getElementById(x[i].id);
		if (element2 .classList.contains("selectedMode")) {
		element2.classList.remove("selectedMode");
	}
	}
	 document.getElementById("HoursContainer").style.display = "Inline";
   
	element.classList.add("selectedMode");
};

function hour(x) {
   element = document.getElementById(x.id);
	var x = document.getElementsByClassName("hour");     
	for (var i = 0; i < x.length; i++)
	{
		element2 = document.getElementById(x[i].id);
		if (element2 .classList.contains("selectedHour")) {
		element2.classList.remove("selectedHour");
	}
	}   
	element.classList.add("selectedHour");
	$('.transform').toggleClass('transform-active');

};

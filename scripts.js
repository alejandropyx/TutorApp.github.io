
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


function sendEmail() {
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "alejandro.s18c@gmail.com",
		Password : "B52223E3460E92B39A9917C6B3A1116DC7DB",
		To : "alejandro.s18c@gmail.com",
		From : "alejandro.s18c@gmail.com",
		Subject : "This is the subject",
		Body : "And this is the body"
	}).then(
	  message => alert(message)
	);
}

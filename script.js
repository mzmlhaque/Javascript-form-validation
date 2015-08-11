/*var d = document.getElementById("err-mail");
d.className = d.className + " alert-danger";
d.innerHTML = ("Hello world !");
*/
window.onload = function(){
	var invalid = document.getElementById("submit").disabled = true;
	var nameField = document.getElementById("nameField");
	nameField.onfocus = function(){
		if(nameField.value == "This field is required"){
			nameField.value = "";
			nameField.style.color = "#000";
		}
		
	}
	nameField.onblur = function(){
		if(nameField.value == ""){
			nameField.value = "This field is required";
			nameField.style.color = "#FF0000";
		}
		
	}
	
	var firstName = document.getElementById("firstName");
	firstName.onfocus = function(){
		if(firstName.value == "This field is required"){
			firstName.value = "";
			firstName.style.color = "#000";
		}
		
	}
	firstName.onblur = function(){
		if(firstName.value == ""){
			firstName.value = "This field is required";
			firstName.style.color = "#FF0000";
		}
		
	}
	
	var lastName = document.getElementById("lastName");
	lastName.onfocus = function(){
		if(lastName.value == "This field is required"){
			lastName.value = "";
			lastName.style.color = "#000";
		}
		
	}
	lastName.onblur = function(){
		if(lastName.value == ""){
			lastName.value = "This field is required";
			lastName.style.color = "#FF0000";
		}
		
	}
	
	var email = document.getElementById("email");
	email.onfocus = function(){
		if(email.value == "This field is required"){
			email.value = "";
			email.style.color = "#000";
		}
		
	}
	email.onblur = function(){
		if(email.value == ""){
			email.value = "This field is required";
			email.style.color = "#FF0000";
		}
		
	}
	
	var password = document.getElementById("password");
	pass = password.value;
	pass = pass.trim();
	var message = document.getElementById("msg-pass");
	var passLength = password.length;
	
	password.onblur = function(){
		if(passLength <= 5){
			message.innerHTML = "Please enter a valid Password (6-20 character)";
			message.style.color = "#FF0000";
		}
		
	}
	var conPass = document.getElementById("con-pass");
	var passMessage = document.getElementById("msg-conpass");
	
	conPass.onblur = function(){
		if(pass == conPass.value){
			passMessage.innerHTML = ("Password Matched");
		}else{
			passMessage.innerHTML = ("Password doesn't match");
		}
		
	}
}
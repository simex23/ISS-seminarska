function verify(){
	var error=0;

//verify email
	var r=document.register.elements[2];
	var atpos=r.value.indexOf("@");
	var dotpos=r.value.lastIndexOf(".");
	//console.log(atpos,dotpos);
	if(dotpos<atpos || r.value==""){
		r.style.borderColor="#ff0000";
		alert("Not a valid email address!");
		if(error==0)
			r.focus();
		error++;
	}

//verify username
	var r=document.register.elements[3];
	if(r.value==""){
		r.style.borderColor="#ff0000";
		alert("Please specify the username!");
		if(error==0)
			r.focus();
		error++;
	}

//password + retype password match
	var r=document.register.elements[4];
	var r2=document.register.elements[5];
	if(r.value!=r2.value){
		r2.style.borderColor="#ff0000";
		alert("Passwords don't match! Try again.");
		if(error=0)
			r2.focus();
		error++;
	}

	//check at end
	if(error!=0){
		alert("Check the red fields");
		return false;
	}
	else if(error==0){
		return true;
	}
}
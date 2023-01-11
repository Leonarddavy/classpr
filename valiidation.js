
function verify(){
var Name= document.getElementById("name");
var Email= document.getElementById("email");
var regNo= document.getElementById("RegNo");
var postalAddress= document.getElementById("PostalAddress");


if(Name.value.trim()==''||Name.value.trim()==null ||Email.value.trim()==''
||regNo.value.trim()==''||postalAddress.value.trim()==''){
alert("PlEASE ENTER THE DETAILS REQUIRED");
return false;
}
else{
true;
}
/*
function handleclick(){
alert("Submission successful");
}*/
}

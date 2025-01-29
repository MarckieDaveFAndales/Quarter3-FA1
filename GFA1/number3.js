document.getElementById("latigo").innerHTML ="Hello " + firstname +" "+ lastname + "!" + " How does it feel to be " + String(2025 - birthyear) + " years old?";

var consent = confirm("Do you agree to share your personal information?");
if (consent){
    console.log("Name: " + nickname + "\nHeight: " + height2 + "'" + height1 + "\"" + "\nWeight: " + weight1)
}
else{
    console.log("User does not wish to share his/her information.")
}
function suicideWebsite() {
	window.alert("Please remember. You should never, no matter what, take you life. It is something that you will regret. Your life can always get better.");
}
// The code from here onward is for the navagation box.
var x = document.getElementById("demo");
var displayInfo = document.getElementById("information");
var selectedCountry = document.getElementById("selected");
        
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}
        
function showPosition(position) {
	x.innerHTML = "Latitude: " + position.coords.latitude + 
	"<br>Longitude: " + position.coords.longitude; 
}
        
function displaythi() {
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0471-2731166,9447700222 </p><p> DISTRICT POLICE CHIEF :9497996991 </p>';
    selectedCountry.innerHTML = 'Thiruvananthapuram';
}
function displaykol() {
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0474-2792970,9447795500 </p><p> DISTRICT POLICE CHIEF :9497996985 </p>';
    selectedCountry.innerHTML = 'Kollam';
}
function displaypat() {
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0468-2222505,9447029008 </p><p> DISTRICT POLICE CHIEF :9497996982 </p>';
    selectedCountry.innerHTML = 'Pathanamthitta';
}
function displayala(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0477-2251720,9447129011 </p><p> DISTRICT POLICE CHIEF :9497996982 </p>';
    selectedCountry.innerHTML = 'Alappuzha';
}  
function displaykot(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:9447029007 </p><p> DISTRICT POLICE CHIEF :9497996983 </p>';
    selectedCountry.innerHTML = 'Kottayam';
}
function displayidu(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0486-2233101,9447032252 </p><p> DISTRICT POLICE CHIEF :9497996981 </p>';
    selectedCountry.innerHTML = 'Idukki';
}
function displayern(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0484-23729012,9447729012 </p><p> DISTRICT POLICE CHIEF :9497996979 </p>';
    selectedCountry.innerHTML = 'Ernakulam';
}
function displaythr(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0487-2362210,9447129013 </p><p> DISTRICT POLICE CHIEF :9497996909 </p>';
    selectedCountry.innerHTML = 'Thrissur';
}
function displaypal(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0491-2505566,9447633445 </p><p> DISTRICT POLICE CHIEF :9497996977 </p>';
    selectedCountry.innerHTML = 'Palakkad';
}
function displaymal(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0483-2734355,9446539017 </p><p> DISTRICT POLICE CHIEF :9497996976 </p>';
    selectedCountry.innerHTML = 'Malappuram';
}
function displaykoz(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:270582,9447171400 </p><p> DISTRICT POLICE CHIEF :9497996989 </p>';
    selectedCountry.innerHTML = 'Kozhikode';
}
function displayway(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0493-6202300,9447204666 </p><p> DISTRICT POLICE CHIEF :9497996974 </p>';
    selectedCountry.innerHTML = 'Wayanad';
}
function displaykan(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0497-2704243,9447029015 </p><p> DISTRICT POLICE CHIEF :9497996973 </p>';
    selectedCountry.innerHTML = 'Kannur';
}
function displaykas(){
	displayInfo.innerHTML = '<h4></h4><p> POLICE : 100</p><p> AMBULANCE : 102</p><p> FIRE : 101 </p><p> DISASTER HELPLINE : 1077 </p><p> DISTRICT COLLECTOR:0499-4255833,9447496600 </p><p> DISTRICT POLICE CHIEF :9497996972 </p>';
    selectedCountry.innerHTML = 'Kasaragod';
}






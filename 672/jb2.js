function jailbreak2(){
if (main_ret == 179 || main_ret == 0){
	window.msgs.innerHTML="<h1>"+LoadedMSG+"</h1>";
	localStorage.passcount = ++localStorage.passcount;window.passCounter.innerHTML=localStorage.passcount;
} 
else {
	localStorage.failcount = ++localStorage.failcount;window.failCounter.innerHTML=localStorage.failcount;
	window.msgs.innerHTML="<h1>Failed to Load Jailbreak! - Restart your Console.</h1>";
	return;
}
}
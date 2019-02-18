var OSName = "Unknown OS";
  if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
  if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
  if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
  if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
  if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
  console.log('Your OS: ' + OSName);
var width=screen.width; 
var height=screen.height;
console.log(width," ", height);
if(width<1000)document.getElementById('bmc').style.fontSize='2em';
function ret(){document.getElementById('bmc').style.fontSize='1em';}
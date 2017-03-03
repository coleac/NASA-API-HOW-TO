var apiKey = 'vtjk2Hmsshw77twSEX3tQCv8sYNex6X5Dt2UcrnG'; 
var req = new XMLHttpRequest();
req.open('GET', 'https://api.nasa.gov/EPIC/api/natural/date/2017-02-16?api_key=' + apiKey, true);	  
req.addEventListener('load',function(){
  if(req.status >= 200 && req.status < 400){
    var response = JSON.parse(req.responseText);
    console.log(response);
	console.log(req.responseText);
    var earth = response[10].image;
    var img = document.createElement("img");
    img.src = "https://api.nasa.gov/EPIC/archive/natural/2017/02/16/png/"+ earth +".png?api_key=" + apiKey;
    img.style="width:300px;height:300px";
    document.getElementById("pic").appendChild(img);
  } 
  else {
    document.write("Error in network request: " + req.statusText);
  }});
req.send(null);  

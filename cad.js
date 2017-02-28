var apiKey = 'vtjk2Hmsshw77twSEX3tQCv8sYNex6X5Dt2UcrnG'; 
var req = new XMLHttpRequest();	
req.open('GET', 'https://api.nasa.gov/SSD-CNEOS/CAD?api_key=' + apiKey + '&date-max=2017-03-31&sort=date', true);	  
req.addEventListener('load',function(){
  if(req.status >= 200 && req.status < 400){
    var response = JSON.parse(req.responseText);
    console.log(response);
	console.log(req.responseText);

    function buildTable(response) {
	  var table = document.createElement("table");
  
      var fields = response.fields;
      var headRow = document.createElement("tr");
      fields.forEach(function(field) {
        var headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
      });
      table.appendChild(headRow);

      response.data.forEach(function(object) {
        var row = document.createElement("tr");
        for (var i = 0; i < response.fields.length; i++) {
	      (function(j) {
		  var cell = document.createElement("td");
          cell.textContent = [object[j]];
          row.appendChild(cell);
          })(i);
		}
        table.appendChild(row);
      });
		
      return table;
    }
    document.getElementById("table").appendChild(buildTable(response));
	
  } 
  else {
    document.write("Error in network request: " + req.statusText);
  }});
req.send(null);


//Source: Eloquent JavaScript: A Modern Introduction to Programming by Marijn Haverbeke (Table code)	  
	  


var i;
var content = "";

obj = inputstream;

for(i=0;i < obj.length; i++){
  country = obj[i].Country;
  system = obj[i].System;
  notes = obj[i].Notes;
  gauge = obj[i].Gauge;
  gaugeMetric = "";
  
  gaugeAssign(gauge);

  gaugeImperial = gaugeMetric * 0.00328084 + " ft";

  content+= "<div class='searchable-item card " + gauge + "'>" + "<h3>" + country + "</h3><br>" + "<h4>" + system + "</h4><br><h5><span class='label label-default'>" + gaugeMetric + " mm</span></h5><br>" + notes + "<br>" + "<b>" + gauge + " gauge</b></div>";
    }
    
displayPage();    

function displayPage(){    
    document.getElementById("content").innerHTML =  content;
}

// quick search regex
var qsRegex;

// init Isotope
var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
  itemSelector: '.searchable-item',
  layoutMode: 'masonry'
});

// Function to assign gauge size

function gaugeAssign(gauge){
      if(gauge == "standard"){
      gaugeMetric = 1435
  }
  else if (gauge == "indian"){
      gaugeMetric = 1676
  }
  else if (gauge == "iberian"){
      gaugeMetric = 1668
  }
  else if (gauge == "irish"){
      gaugeMetric = 1600
  }
  else if (gauge == "russian"){
      gaugeMetric = 1520
  }
  else if (gauge == "scotch"){
      gaugeMetric = 1372
  }
  else if (gauge == "kyoki"){
      gaugeMetric = 1067
  }
  else if (gauge == "metre"){
      gaugeMetric = 1000
  }
  else if (gauge == "3foot"){
      gaugeMetric = 914
  }
  else if (gauge == "900mm"){
      gaugeMetric = 900
  }
  else if (gauge == "trefotsbanor"){
      gaugeMetric = 891
  }
  else if (gauge == "800mm"){
      gaugeMetric = 800
  }
  else if (gauge == "2ft6"){
      gaugeMetric = 762
  }
  else if (gauge == "bosnian"){
      gaugeMetric = 760
  }
  else if (gauge == "2foot"){
      gaugeMetric = 600
  }
  else if (gauge == "min"){
      gaugeMetric = 381
  }
  
  return gaugeMetric;
}

// use value of search field to filter
var quicksearch = document.getElementsByClassName("quicksearch")[0];
quicksearch.onkeyup = function() {
  qsRegex = new RegExp( quicksearch.value, 'gi' );
  filterValue = function( itemElem ) {
    var name = itemElem.textContent;
    return name.match(qsRegex);
  }
  iso.arrange({ filter: filterValue });
}

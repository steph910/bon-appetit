function getResults() {
  document.getElementById("results").style.display = "block";
  let searchTerm = document.querySelector("#search-input").value;
  let zipcode = localStorage.getItem("BAzipcode");
  httpGET(searchTerm);
}

function httpGET(searchTerm) {
  let zipcode = localStorage.getItem("BAzipcode");
  let endpoint = "https://api.yelp.com/v3/businesses/search?callback=?&location=" + zipcode;

  if (searchTerm) {
      endpoint += "&term=" + searchTerm;
  }

  let categories = localStorage.getItem("BAcategories");
  if (categories) {
      endpoint += "&categories=" + categories.toString();
  }

  let attributes = localStorage.getItem("BAattributes");
  if (attributes) {
      endpoint += "&attributes=" + attributes.toString();
  }
  
  console.log(endpoint);

  // let request = new XMLHttpRequest();
  // request.open("GET", endpoint);
  // request.setRequestHeader("Authorization", "Bearer 38nrwFt8uP_X3LXTpAyKV8plae2d63uDrL7pd5vxNW0R1S5PJNrPPthXtkX64_BMEtCnBqzIpgawcIQY80Ohx2bmJb8UDK54I8wMLYJ1ZoSc7cydpqsqZU4ywZOZYnYx")
  // request.send();
  // console.log(request);

  /*var settings = {
      "url": endpoint,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer 38nrwFt8uP_X3LXTpAyKV8plae2d63uDrL7pd5vxNW0R1S5PJNrPPthXtkX64_BMEtCnBqzIpgawcIQY80Ohx2bmJb8UDK54I8wMLYJ1ZoSc7cydpqsqZU4ywZOZYnYx"
      },
  };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
  });*/

  $.ajax({
    url: endpoint,
    dataType: "jsonp",
    crossDomain: true,
    // contentType: "application/json",
    // headers: {
    //   "Authorization": "Bearer 38nrwFt8uP_X3LXTpAyKV8plae2d63uDrL7pd5vxNW0R1S5PJNrPPthXtkX64_BMEtCnBqzIpgawcIQY80Ohx2bmJb8UDK54I8wMLYJ1ZoSc7cydpqsqZU4ywZOZYnYx"
    // },
    success  : function(data) {
        console.log(data);
    }
});
}

{/* <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> */}

/*
'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '38nrwFt8uP_X3LXTpAyKV8plae2d63uDrL7pd5vxNW0R1S5PJNrPPthXtkX64_BMEtCnBqzIpgawcIQY80Ohx2bmJb8UDK54I8wMLYJ1ZoSc7cydpqsqZU4ywZOZYnYx';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});
*/

// GET https://api.yelp.com/v3/autocomplete?text=""

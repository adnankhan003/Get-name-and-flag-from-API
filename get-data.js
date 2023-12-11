document.querySelector('.get-data').onclick = function() {

    // Creating and initializing the object of XMLHttpRequest
    var xmlHttp = new XMLHttpRequest();

    // Applying the condition onreadystagechange
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {

            // Parsing the JSON into JavaScript object
            var answer = JSON.parse(xmlHttp.responseText);

            // Resetting the main content div to blank
            document.querySelector('.all-countries').innerHTML = '';

            var allDiv = '';
            // Taking the output w.r.t. input
            answer.forEach((values) => {
                allDiv +=
                `
                    <div class="col-lg-3 col-6">
                    <img src="${values.flags.png}" class="img-fluid">
                    <h4 class="text-center">${values.name.common}</h4>
                    </div>
                `;
            });
            
            // Assigning the output to the div(class) in the page
            document.querySelector('.all-countries').innerHTML = allDiv;
        }
    }

    // Connecting the Api - readystate = 1
    xmlHttp.open("GET","https://restcountries.com/v3.1/all");

    // Sending the request - readystate = 2
    xmlHttp.send();

    // Processing - readystate = 3
    // Request cycle complete - readystate = 4 & Status code = 200
}

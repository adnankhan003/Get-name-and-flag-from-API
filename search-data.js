$('.search-button').click(function() {

    // Resetting the main content div to blank
    document.querySelector('.all-countries').innerHTML = '';

    // Taking the value from input box
    var countryName = $(".x1").val();

        // Appending the text of from input box to the country name and flag api
        const api = `https://restcountries.com/v3.1/name/${countryName}`;
        
        // Initializing the Ajax and taking the output w.r.t. input
        $.ajax({
            type:"GET",
            url:api,
            success:function(response) {
                var divs='';
                $.each(response, function(i,values){
                    divs+=
                    `
                    <div class="col-lg-3 col-6 text-center">
                        <img src="${values.flags.png}" class="img-fluid"/>
                        <h4 class="text-center">${values.name.common}</h4>    
                    </div>
                    `;
                });

                // Assigning the output to the div(class) in the page
                $(".all-countries").html(divs);
            }
        });
});
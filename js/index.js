function myFunction() {
    if ($('#navDemo').is(':visible')) 
    {
        $('#navDemo').hide();
    } 
    else 
    { 
        $('#navDemo').show();
    }
}


$.ajax({url: "https://freegeoip.net/json/", success: function(result)
	{
        console.log(result);
    }
});
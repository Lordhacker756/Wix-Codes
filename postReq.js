import {fetch} from 'wix-fetch';

function addDataAPI(name, email, phone, date, choice )
{
 let bodyContent = JSON.stringify({
  "Name": name,
  "Email": email,
  "Phone": phone,
  "Date": date,
  "Choice": choice
});

fetch( "https://3pixelsonline.in/api/json-insert.php?token=dasfasdhfkashdf12312", {
  "method": "post",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "body": bodyContent
} )
  .then( (httpResponse) => {
    if (httpResponse.ok) {
      return httpResponse.json();
    } else {
      return Promise.reject("Fetch did not succeed");
    }
  } )
  .then( (json) => console.log(json.someKey) )
  .catch(err => console.log(err));
}

$w.onReady( function() {
    $w('#BookingForm').onAfterSave(()=>{
        const Name = $w('#Name').value;
        const Email = $w('#Email').value;
        const Phone = $w('#Phone').value;
        const Date = $w('#Date').value;
        const Choice = $w('#Choice').value;

        console.log(Name + ' ' + Email + ' ' + Phone);

        addDataAPI(Name,Email,Phone,Date,Choice);
    })
} );


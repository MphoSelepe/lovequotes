function clock(){

      var monthNames =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];
      var dayNames =["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]

      var today = new Date();

      document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " +
       today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear(

        ));



        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var day = h<11 ? 'AM' : 'PM';

        h = h<10? '0'+h: h;
        m = m<10? '0'+m: m;
        s = s<10? '0'+s: s;


    document.getElementById('hours').innerHTML =h;
    document.getElementById('min').innerHTML =m;
    document.getElementById('sec').innerHTML = s;
    }var inter = setInterval(clock,400);










    function sendMail(){
        let params = {
            name: document.getElementById("name").value, 
            email: document.getElementById("email").value ,
            message: document.getElementById("message").value ,

        }
    

    


     emailjs.send("service_l85s7b8","template_8jzhehg", params).then(alert("Email Sent!!!"))
    .catch((err) => console.log(err));
    }
const Spanko = document.querySelector(".SleppTime");
        const PlaceTime = document.querySelector(".clockdate");
        const PlaceTimes = document.querySelector(".clockhour");
        const PhotoTime = document.querySelector(".TimePhoto");
    function Time(){

        let currentTime = new Date();
        let Day = currentTime.getDay();
        let Month = currentTime.getMonth();
        let Year = currentTime.getFullYear();
        let Hours = currentTime.getHours();
        let Min = currentTime.getMinutes();
        let Seconds = currentTime.getSeconds();


        
        if(Month<10) Month= "0"+Month;
        if(Day<10) Day= "0"+Day;

        if(Hours<10) Hours= "0"+Hours;
        if(Min<10) Min= "0"+Min;
        if(Seconds<10) Seconds= "0"+Seconds;
    

        PlaceTime.innerHTML=Year+"."+Month+"."+Day;
        PlaceTimes.innerHTML=Hours+" : "+Min+" : "+Seconds;   
        
    }
setInterval(Time,1000);

Spanko.addEventListener('click',function(){
    if(Spanko.innerHTML=='Ide spać'){
    PhotoTime.setAttribute("src","https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    document.body.style.background="black";
    document.body.style.color="gray";
    Spanko.textContent="wstaje";
    }
    else{
    PhotoTime.setAttribute("src","https://random.imagecdn.app/400/350");
    document.body.style.background="cornflowerblue";
    document.body.style.color="black";
    Spanko.textContent="Ide spać";
    }
    })
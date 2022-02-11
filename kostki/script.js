function losuj(x){ 


    let becik = document.getElementById("bets").value;
    let punkty = (document.getElementById("points").innerHTML)*1;
    console.log(punkty);
    
    
    if( becik != 0 && punkty > 0){
      if(becik <= punkty){
        console.log("masz duzo punktów");
         losowanie(x);
      }
      else{
        document.getElementById("gz").innerHTML= "<div id='sad'>Nie posiadasz wystarczająco punktów </div>";
      }
    }
    else{
      document.getElementById("gz").innerHTML=  " <div id='sad'> Musisz coś obstawić żeby zagrać </div>";
    }
    }
    
    function losowanie(x){
    let choice = x;  
    let random1 = Math.floor(Math.random() * 6)+1;
    let random2 = Math.floor(Math.random() * 6)+1;
    let wynik= random1+random2;
    let becik = document.getElementById("bets").value;
    
    document.getElementById("score").innerHTML=wynik; //wynik do zmiany 
    document.getElementById("result1").src ="oczka/oczko_"+random1+".PNG";
    document.getElementById("result2").src ="oczka/oczko_"+random2+".PNG";
    
    if(choice == 'LOW'){
      console.log("low");
      if(wynik <= 6)
      {
        iloscpunktow = (document.getElementById("points").innerHTML)*1+(becik*1.8);
        document.getElementById("points").innerHTML = iloscpunktow.toFixed(0);
        document.getElementById("gz").innerHTML=  " <div id='win'> Gratulacje </div>";
      }
      else{
        iloscpunktow = (document.getElementById("points").innerHTML)*1-becik;
        document.getElementById("points").innerHTML = iloscpunktow.toFixed(0);
        document.getElementById("gz").innerHTML=  " <div id='lose'> Może następnym razem </div>";
      }
    } 
    else if(choice == 'HIGH')
    {
      console.log("high");
      if(wynik > 6)
      {
        iloscpunktow = (document.getElementById("points").innerHTML)*1+(becik*1.8);
        document.getElementById("points").innerHTML = iloscpunktow.toFixed(0);
        document.getElementById("gz").innerHTML=  " <div id='win'> Gratulacje </div>";
      }
      else{
        iloscpunktow = (document.getElementById("points").innerHTML)*1-becik;
        document.getElementById("points").innerHTML = iloscpunktow.toFixed(0);
        document.getElementById("gz").innerHTML=  " <div id='lose'> Może następnym razem </d iv>";
      }
    }
    
    }
    
    function losujzliczb(x){ 
    
    
    let becik = document.getElementById("bets").value;
    let punkty = (document.getElementById("points").innerHTML)*1;
    console.log(punkty);
    
    
    if( becik != 0 && punkty > 0){
      if(becik <= punkty){
        console.log("masz duzo punktów");
         losowaniezliczb(x,becik);
      }
      else{
        document.getElementById("gz").innerHTML= "<div id='sad'>Nie posiadasz wystarczająco punktów </div>";
      }
    }
    else{
      document.getElementById("gz").innerHTML=  " <div id='sad'> Musisz coś obstawić żeby zagrać </div>";
    }
    }
    
    function losowaniezliczb(liczba,bet){
    
    let choice = liczba;   
    let random1 = Math.floor(Math.random() * 6)+1;
    let random2 = Math.floor(Math.random() * 6)+1;
    let wynik= random1+random2;
    let becik = bet;
    console.log("bet: " , bet," wybór: ",choice,"wynik: ",wynik);
    
    
    document.getElementById("score").innerHTML=wynik; //wynik do zmiany 
    document.getElementById("result1").src ="oczka/oczko_"+random1+".PNG";
    document.getElementById("result2").src ="oczka/oczko_"+random2+".PNG";
    
      if(choice == wynik){
        console.log("win");
        iloscpunktow = (document.getElementById("points").innerHTML)*1+(becik*3);
        document.getElementById("points").innerHTML = iloscpunktow.toFixed(0);
        document.getElementById("gz").innerHTML=  " <div id='win'> Gratulacjeeee </div>";
    }
    else{
      console.log("lose");
        iloscpunktow = (document.getElementById("points").innerHTML)*1-becik;
        document.getElementById("points").innerHTML = iloscpunktow.toFixed(0);
        document.getElementById("gz").innerHTML=  " <div id='lose'> Może następnym razem </d iv>";
    }
    }
    
    function motyw(){
    
     const element = document.getElementById("kolory");
     let cos=  element.getAttributeNode("value").value;
    
      if(cos == "moon"){
    
      const element = document.getElementById("kolory");
      element.getAttributeNode("value").value = "sun";
      document.getElementById("kolory").className = "bx bxs-sun";
      document.body.style.backgroundColor = "pink";
       document.body.style.color = "black";
    
    
      }
      else{
        document.getElementById("kolory").className = "bx bxs-moon";
        const element = document.getElementById("kolory");
        element.getAttributeNode("value").value = "moon";
        document.body.style.backgroundColor = "#afafaf";
        document.body.style.color = "black";
    
      }
    }
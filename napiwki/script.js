        const count = document.querySelector(".count");
        const price = document.querySelector(".money");
        const procent = document.querySelector(".procent");
        const tip = document.querySelector(".tip");
        const tipprize = document.querySelector(".tiphow");


        tip.addEventListener('click',function(){
                let napiwek= ((1.+procent.value/100)*price.value)/count.value;
                if(procent.value > 0){
                        if(price.value > 0){

                                if(count.value >0){

                                        if(count.value == 1){
                                                tipprize.textContent="Żeby było miło powinienes dac " +napiwek.toFixed(2)+ " napiwku";   
                                        }
                                        
                                        else{
                                                tipprize.textContent="Żeby było miło kazdy z was powinien dac " +napiwek.toFixed(2)+ " napiwku";  
                                        }
                                }
                                else{
                                        tipprize.textContent="Podałeś złą ilość osób przy stole";
                                }
                        } 
                        else{
                                tipprize.textContent="Podałeś złą kwote za która zjedliście";
                        }
                }
                else{
                        tipprize.textContent="Podałeś złą wartość procentowa";
                }

        })
                
                
                
        
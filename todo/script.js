         const todo = document.querySelector('.listatodo');
         const button = document.querySelector('.btn');
         const ul = document.querySelector('ul');
         const main = document.querySelector('.main');
         



        
        
        
         button.addEventListener('click',dodawanie)
         addEventListener('keypress', function (e) {
                 if (e.key === 'Enter') {
           dodawanie();
         }})
  
         function dodawanie(){

                 const input = document.querySelector('.wprowadzenie');

                 if(input.value.length>0){

                
                        let li = document.createElement("li");
                        li.classList="lista";  
                        li.appendChild(document.createTextNode(input.value)); 
                        ul.appendChild(li);                     
                        todo.appendChild(ul);                                                                   
                                                
                        let del = document.createElement("button");
                        del.appendChild(document.createTextNode("X")); 
                        del.classList="btndelete";
                        li.appendChild(del);

                        let edit = document.createElement("button");
                        edit.appendChild(document.createTextNode("Edit")); 
                        edit.classList="btnedit";
                        li.appendChild(edit); 

                        let done = document.createElement("button");
                        done.appendChild(document.createTextNode("✓")); 
                        done.classList="btndone";
                        li.appendChild(done);

                        input.value = "";

                        del.addEventListener('click',function(){
                        
                                li.classList.add('delete');
                                
                        })

                        done.addEventListener('click',function(){
                        
                                li.classList.toggle('done');

                                
                        })

                        edit.addEventListener('click',function(){

                                var nowe = prompt('podaj nowa tresc zadania');

                                        if(nowe != ""){                       

                                                li.innerText= nowe;
                                                li.appendChild(del);
                                                li.appendChild(edit);
                                                li.appendChild(done);
                                                
                                        }
                                        else{
                                                console.error('nic nie napisales');
                                        }
                   
                        })
                        
                        

                                
                 }
                 else{
                         console.log('musisz cos wpisac')
                 }


        }



        







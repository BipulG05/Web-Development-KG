let currentDispplay = '';
        // document.querySelector('#display').value = currentDispplay;
        function clickButton(a){
            // console.log(a);
            currentDispplay = currentDispplay + a;
            document.querySelector('#display').value = currentDispplay;
        }
        function clearButton(){
            currentDispplay = ''
            document.querySelector('#display').value = currentDispplay;
        }
        function calculateButton(){
            try{
                currentDispplay = eval(currentDispplay);
                currentDispplay = currentDispplay.toFixed(2);
                document.querySelector('#display').value = currentDispplay;
            }
            catch{
                currentDispplay = ''
                document.querySelector('#display').value = 'Error';
            }
            
        }
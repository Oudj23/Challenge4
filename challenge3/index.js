-1
        //task1 script//
        const rawPrice = document.getElementById('raw-price');
        const finalPrice = document.getElementById('final-price');
        const vatRate = 0.185
        rawPrice.addEventListener('input', () => {
            const price = parseFloat(rawPrice.value);
            const vat = price * vatRate;
            const final = price + vat;
            if(final >= 0){
                finalPrice.textContent = final;
            }
            else{
                finalPrice.textContent = "0";
            }
            
        })
        
  
        //task2 script//
        var input = document.getElementById('enternumber');
        input.addEventListener('input', function() {
            var value = this.value;
            if(value == 0 || value == 1 || value > 9){ 
                input.value= ""
            }
            else{
                function showresults(){
                    var items = document.getElementsByTagName("th");
                    var items2 = document.getElementsByTagName("td"); 
                    console.log(items[1].textContent)
                    for(i=0;i<10;i++){
                        var value = input.value * i;
                        items2[i].textContent = value
                    }

                }
                showresults()
            }
        })
        
    
  
        //task3 script//
        const arr = [3,11,7,2,9,10]
       
        function somme (array){
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            console.log(sum)
            var avg = sum/array.length
            console.log(avg)
        }
        somme(arr)
        function max(array){
            let max = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) {
                    max= array[i]
                    console.log(max)
                }
                else{
                    break
                    
                }
            }
            
        }
        max(arr)
        function min(array){
            let min = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] < min) {
                    min= array[i]  
                }
                
            } console.log(min)
            
        }
        min(arr)
      
    
  
        //task 4 script//
        const tempc = document.getElementById("temp-c")
        const tempf = document.getElementById("temp-F")
        tempc.addEventListener("input", function(){
            let value = tempc.value
            let result = value * 9/5 + 32
            document.getElementById("result").innerHTML ="Fahrenheit:" + result
        })
        tempf.addEventListener("input", function(){
            let value = tempf.value
            let result =  (value-32)/9*5
            document.getElementById("result2").innerHTML ="Celsius:" +result
        })
    
  
        var string = document.getElementById("string")
        string.addEventListener("input",function(){
            var value = string.value;
            var reversedtext = ''
            for (let i = value.length - 1; i >= 0; i--) {
                reversedtext += value[i]
            }
            document.getElementById("reversed").innerHTML = reversedtext
        })
    
  
        //task6 script//
        const string_input = document.getElementById("string-vowel")
        string_input.addEventListener("input", function(){
            const value = string_input.value
            var vowels = ""
            for(i=0;i<value.length;i++){
                if(value[i] === 'a' || value[i] === 'e' || value[i] === 'i' || value[i] === 'o' || value[i] === 'u'){
                    vowels += value[i]+"," ;
                }
                
            }
           document.getElementById("display-vowel-count").textContent=vowels
                var len = vowels.length;
                conole.log("len")
                console.log(len)
           document.getElementById("num").textContent = len/2
        })

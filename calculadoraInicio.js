let input = document.querySelector("input.visor")

document.querySelector("div.num0").addEventListener("click", function(event){
           input.value += 0
        })
        document.querySelector("div.num1").addEventListener("click", function(event){
           input.value += 1
        })
        document.querySelector("div.num2").addEventListener("click", function(event){
           input.value += 2
        })
        document.querySelector("div.num3").addEventListener("click", function(event){
           input.value += 3
        })
        document.querySelector("div.num4").addEventListener("click", function(event){
           input.value += 4
        })
        document.querySelector("div.num5").addEventListener("click", function(event){
           input.value += 5
        })
        document.querySelector("div.num6").addEventListener("click", function(event){
           input.value += 6
        })
        document.querySelector("div.num7").addEventListener("click", function(event){
           input.value += 7
        })
        document.querySelector("div.num8").addEventListener("click", function(event){
           input.value += 8
        })
        document.querySelector("div.num9").addEventListener("click", function(event){
           input.value += 9
        })
        // Limpar o visor
        document.querySelector("div.c").addEventListener("click", function(event){
            input.value = ""
        })
        // Ponto flutuante (equivalente a vírgula)
        document.querySelector("div.float").addEventListener("click", function(event){
            input.value += "."
        })
        // Divisão
        document.querySelector("div.dividir").addEventListener("click", function(event){
            input.value += "/"
        })
        //Multiplicação
        document.querySelector("div.multiplicar").addEventListener("click", function(event){
            input.value += "*"
        })
        // Soma
        document.querySelector("div.somar").addEventListener("click", function(event){
            input.value += "+"
        })
        // Subtração
        document.querySelector("div.subtrair").addEventListener("click", function(event){
            input.value += "-"
        })
        // Número elevado a outro
        document.querySelector("div.quadrado").addEventListener("click", function(event){
            input.value += "**"
        })
        // Resultado ( = )
        document.querySelector("div.res").addEventListener("click", function(event){
            if(input.value.length == 0){
                input.value = ""
                alert("Erro")
            }
            else{
            try {
                input.value = eval(input.value);
            } catch (e) {
                alert('Erro na expressão');
                input.value = ""
            } 
        }
        })


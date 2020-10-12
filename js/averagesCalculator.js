/* Calculador de média.js v2.0
by Ruyter Torres - FAM Online, 11/out/2020
*/

let aUm = ' ', aDois = ' ', aTres = ' ', aQuatro = ' '; // Variaveis

        function calcularMediaA(aUm, aDois, aTres, aQuatro, med,){ //fução principal
                aUm = document.getElementById('aUm').value // para recuperar valor digitado
                aDois = document.getElementById('aDois').value// para recuperar valor digitado
                aTres = document.getElementById('aTres').value// para recuperar valor digitado
                aQuatro = document.getElementById('aQuatro').value// para recuperar valor digitado

                aUm = parseFloat(aUm) // para tranformar o valor recebido em tipo number
                aDois = parseFloat(aDois)// para tranformar o valor recebido em tipo number
                aTres = parseFloat(aTres)// para tranformar o valor recebido em tipo number
                aQuatro = parseFloat(aQuatro)// para tranformar o valor recebido em tipo number

                if(aUm > 10  || aUm < 0 || aDois > 10 || aDois < 0 || aTres > 10 || aTres < 0 || aQuatro > 10 || aQuatro < 0){ //tratamento de erro

                        aUm = false, aDois = false, aTres = false, aQuatro = false; 
                        alert("Por favor, Insira um número válido"); 
                        document.getElementById('aQuatro').value = ' ';
                        document.getElementById('aTres').value = ' ';
                        document.getElementById('aDois').value = ' ';
                        document.getElementById('aUm').value = ' ';

                        console.log(aUm + " " + aDois + " "  + aTres + " "  + aQuatro)// testando o tratamento de erro

                        if (aUm = false || aDois == false || aTres == false || aQuatro == false){
                        window.location.href = '../index.html'
                        }
                }else { //Calculador de média
                        med = (aUm + aDois + aTres + aQuatro)/4

                        if(med >= 6){
                                document.getElementById('result').value = 'Sua média foi ' + med + ' Parabéns!!! Você está Aprovado!';
                        }else {
                                document.getElementById('result').value = 'Sua média foi ' + med + ' Você está Reprovado!';
                        }
                }
        }

let bUm = ' ', bDois = ' ', bTres = ' ', bQuatro = ' '; // Variaveis

        function calcularMediaB(bUm, bDois, bTres, bQuatro, med,){ //fução principal
                bUm = document.getElementById('bUm').value // para recuperar valor digitado
                bDois = document.getElementById('bDois').value// para recuperar valor digitado
                bTres = document.getElementById('bTres').value// para recuperar valor digitado
                bQuatro = document.getElementById('bQuatro').value// para recuperar valor digitado

                bUm = parseFloat(bUm) // para tranformar o valor recebido em tipo number
                bDois = parseFloat(bDois)// para tranformar o valor recebido em tipo number
                bTres = parseFloat(bTres)// para tranformar o valor recebido em tipo number
                bQuatro = parseFloat(bQuatro)// para tranformar o valor recebido em tipo number

                if(bUm > 10  || bUm < 0 || bDois > 10 || bDois < 0 || bTres > 10 || bTres < 0 || bQuatro > 10 || bQuatro < 0){ //tratamento de erro

                        bUm = false, bDois = false, bTres = false, bQuatro = false; 
                        alert("Por favor, Insira um número válido"); 
                        document.getElementById('bQuatro').value = ' ';
                        document.getElementById('bTres').value = ' ';
                        document.getElementById('bDois').value = ' ';
                        document.getElementById('bUm').value = ' ';

                        console.log(bUm + " " + bDois + " "  + bTres + " "  + bQuatro)// testando o tratamento de erro

                        if (bUm = false || bDois == false || bTres == false || bQuatro == false){
                        window.location.href = '../index.html'
                        }
                }else { //Calculador de média
                        med = (bUm + bDois + bTres + bQuatro)/4

                        if(med >= 6){
                                document.getElementById('resultB').value = 'Sua média foi ' + med + ' Parabéns!!! Você está Aprovado!';
                        }else {
                                document.getElementById('resultB').value = 'Sua média foi ' + med + ' Você está Reprovado!';
                        }
                }
        }

let cUm = ' ', cDois = ' ', cTres = ' ', cQuatro = ' '; // Variaveis

        function calcularMediaC(cUm, cDois, cTres, cQuatro, med,){ //fução principal
                cUm = document.getElementById('cUm').value // para recuperar valor digitado
                cDois = document.getElementById('cDois').value// para recuperar valor digitado
                cTres = document.getElementById('cTres').value// para recuperar valor digitado
                cQuatro = document.getElementById('cQuatro').value// para recuperar valor digitado

                cUm = parseFloat(cUm) // para tranformar o valor recebido em tipo number
                cDois = parseFloat(cDois)// para tranformar o valor recebido em tipo number
                cTres = parseFloat(cTres)// para tranformar o valor recebido em tipo number
                cQuatro = parseFloat(cQuatro)// para tranformar o valor recebido em tipo number

                if(cUm > 10  || cUm < 0 || cDois > 10 || cDois < 0 || cTres > 10 || cTres < 0 || cQuatro > 10 || cQuatro < 0){ //tratamento de erro
                        alert("Por favor, Insira um número entre 0 (Zero) e 10 (dez)!"); 
                        window.location.href = '../index.html'

                }else { //Calculador de média
                        med = (cUm + cDois + cTres + cQuatro)/4

                        if(med >= 6){
                                document.getElementById('resultC').value = 'Média ' + med + ', Parabéns Pela Aprovação!!!';
                        }else {
                                document.getElementById('resultC').value = 'Média ' + med + ', Você está Reprovado!';
                        }
                }
        }
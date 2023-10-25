// declara as variáveis
let nome = "Marcos"
let xp = "3000"
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let mensagem = "O Herói de nome " + nome + " está no nível de "

if(xp <=1000){
    console.log(mensagem + nivel[0])
}
else if((xp >= 1001) && (xp <= 2000)){
    console.log(mensagem + nivel[1])
}
else if((xp >= 2001) && (xp <=5000)){
    console.log(mensagem + nivel[2])
}
else if((xp >= 6001) && (xp <=7000)){
    console.log(mensagem + nivel[3])
}
else if((xp >= 7001) && (xp <=8000)){
    console.log(mensagem + nivel[4])
}
else if((xp >= 8001) && (xp <=9000)){
    console.log(mensagem + nivel[5])
}
else if((xp >= 9001) && (xp <=10000)){
    console.log(mensagem + nivel[6])
}
else if(xp >= 10001){
    console.log(mensagem + nivel[7])
}


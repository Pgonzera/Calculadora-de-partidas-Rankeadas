
let result = rankend(110,0)

let rank = ''

function rankend (win, defeat){
  let winRate = win - defeat
  return winRate
  
}

if (result <= 10){
  rank = 'ferro'
}
else if (result >= 11 && result <=20){
  rank = 'bronze'
}
else if(result <=21 && result <=50){
  rank = 'prata'
}
else if(result <=21 && result <=50){
  rank = 'prata'
}
else if(result <=51 && result <=80){
  rank = 'prata'
}
else if(result <=81 && result <=90){
  rank = 'prata'
}
else if(result <=91 && result <=100){
  rank = 'prata'
}
else{
  rank = 'imortal'
}
console.log('O saldo de vitórias é: ' + result + ' e o nível é ' + rank)
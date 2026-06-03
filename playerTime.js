let playerTime = Number(prompt("A quanto tempo voce esta online? ")) 

if (playerTime >= 15 && playerTime < 30)
alert("voce esta em modo ocioso")

else if (playerTime >= 30)
alert("voce foi deslogado por ficar muito tempo inativo")

else
alert("voce esta ativo")

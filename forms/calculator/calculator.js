
btnAdd.onclick=function(){
  let number1 = inptNumber1.value
  let number2 = inptNumber2.value
  lblAnswer.textContent = accountName + ", " + "Here is the result: " + (Number(number1) + Number(number2))
  lblAnswer.hidden = false
}


btnMultiply.onclick=function(){
  let number1 = inptNumber1.value
  let number2 = inptNumber2.value
  lblAnswer.hidden = false
  lblAnswer.textContent = accountName + ", " + "Here is the result: " + (Number(number1) * Number(number2))
}

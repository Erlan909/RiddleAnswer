// let qwestion = [
//     {
//         qwest:'висит груша нельзя скушать',
//         answer:'лаипочка'
//     },
//     {
//         qwest:'зимой и летом одним цветом',
//         answer:'султан'
//     },
//     {
//         qwest:'js или puthon',
//         answer:'js'
//     },
// ]
// let count = 0
// for (let i=0; i<qwestion.length; i++){
//     alert(qwestion[i].qwest)
//     let otvet = prompt('введи')
//     if (otvet == qwestion[i].answer){
//         alert('cool')
//         count++
//     }else{
//         alert('не cool')
//     }
// }alert('your count is' + count)

// function go (){
//     alert('hello')
// }
// go()
// go()
// go()//3 раза


// let num1 = +prompt('first')
// let operator = prompt('operator')
// let num2 = +prompt('second')

// function minus(a,b){
//     return a-b
// }
// function sum(a,b){
//     return a+b
// }
// function times(a,b){
//     return a*b
// }
// function devide (a,b){
//      return b!=0 ? a/b :'нельзя использовать'
// } 


// if (operator == '-'){
//     minus(num1,num2)
// }else if (operator == '+'){
//     alert(sum(num1,num2))
// }
// else if (operator == '*'){
//     alert(times(num1,num2))
// }else{
//     alert('что то пошло не так')
// }

let qwestion = [
    {
        qwest:'висит груша нельзя скушать',
        answer:'лампочка'
    },
    {
        qwest:'зимой и летом одним цветом',
        answer:'султан'
    },
    {
        qwest:'js или puthon',
        answer:'js'
    },
]
 count=0;
   isAnswer()
  function isAnswer() {
    for (var i = 0; i < qwestion.length; i++) {
        alert (qwestion[i].qwest)
        let otvet = prompt('введи')
         if (otvet[i] == qwestion[i] .answer){
          alert('правильно')
          count+=10;
    }else {
        alert('не правильно')
    }
 
}
} 

    alert(`вы набрали` + count)

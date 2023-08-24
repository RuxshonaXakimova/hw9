// 1.Самое длинное имя в списке Отправляем функции три аргумента с разными именами Функция возвращает максимально длинное имя max_name('Alex', 'George', 'Michael')имя в списке Отправляем функции три аргумента с разными именами Функция возвращает максимально длинное имя max_name('Alex', 'George', 'Michael')
function max_name(name) {
    let c = name.split(" ")
    let d = c.reduce((a,b) => {
        if(a.length > b.length){
            return a
        } else{
            return b
        }} )
    alert(`Самое длинное имя ${d}`)
}
let names= prompt('Введите имя\n(Внимание после каждого имени необходимо поставить пробел)').trim()
max_name(names)


// // 2. Создать функцию которая делает пропорции не в зависимости от каких либо цифр
let num1 = +prompt("enter first number for percent")
let num2 = +prompt("enter second max-number for percent")
proportion(num1, num2)
function proportion(num1 , num2) {
    let result = num1*100/num2
    alert(`${num1} of ${num2} is ${result}%`)
}


// 3.Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте 
let fib = +prompt('enter number for Fibonachi')
fibonachi(fib)
function fibonachi(num) {
    let a = 0
    let b = 1
    let c 
    for(i=0; i<num; i++){
        c = a+b
        a = b
        b = c
    }
    alert(`Fibonachi result ${a}`)
}



// 1 zadaniye(1.2)
// function largestName(name) {
//     let d = name.reduce((a,b) => {
//         if(a.length > b.length){
//             return a
//         } else{
//             return b
//         }} )
//     console.log(d);
// }

// let names
// let b = []
// for(i=1; i<=3; i++){
//     names = prompt(`Enter 3 names:\n ${i} name`).trim()
//     b.push(names)
// }
// largestName(b)



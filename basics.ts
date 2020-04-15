// Types: Numbers, Boolean and String

function add(num1: number, num2: number, showResult: boolean, phrase: string){
    const results = num1 + num2
    if (showResult) {
        console.log(phrase + results)
    } else {
        return results
    }
    // return num1 + num2
}

const num1 = 5
const num2 = 4.9
const show = "The result is: "
const printRes = true

add(num1, num2, printRes, show)
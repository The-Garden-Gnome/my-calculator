const bodyElement = document.querySelector('body')
const container = document.createElement('div')
bodyElement.append(container)
const outputElement = document.querySelector('#output')

function add (x,y) {
    return x + y
}

function multiply (x,y) {
    return x * y
}

function divide (x,y) {
    return x / y
}

function calculator (x,y, equipment){
    return equipment(x,y)
}

const addbuttonElement = document.createElement('button')
let addbutton = document.createTextNode("+");
addbuttonElement.appendChild(addbutton);  




const multiplybuttonElement = document.createElement('button')
let multiplybutton = document.createTextNode("*");
multiplybuttonElement.appendChild(multiplybutton);  




const dividebuttonElement = document.createElement('button')
let dividebutton = document.createTextNode("/");
dividebuttonElement.appendChild(dividebutton);  

    


container.append(addbuttonElement,multiplybuttonElement,dividebuttonElement)
container.appendChild(document.createElement("br"));

const xinputElement = document.createElement('input')
xinputElement.type = "number"
xinputElement.setAttribute("placeholder",0)


const yinputElement = document.createElement('input')
yinputElement.type = "number";
yinputElement.setAttribute("placeholder",0)

bodyElement.append(xinputElement, yinputElement)

const output1 = calculator(1,2, add)
console.log({ output1 })

addbuttonElement.addEventListener ("click", 
    function() {
        const x = Number(xinputElement.value)
        const y = Number(yinputElement.value)
        const result = calculator(x, y, add)
        outputElement.innerHTML = result
    })

multiplybuttonElement.addEventListener ("click", 
    function() {
        const x = Number(xinputElement.value)
        const y = Number(yinputElement.value)
        const result = calculator(x, y, multiply)
        outputElement.innerHTML = result
    })

dividebuttonElement.addEventListener ("click", 
        function() {
            const x = Number(xinputElement.value)
            const y = Number(yinputElement.value)
            const result = calculator(x, y, divide)
            outputElement.innerHTML = result
        })
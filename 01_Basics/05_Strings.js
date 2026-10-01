const name = "Shivam"
const repoCount = 5

console.log(name + " " + repoCount)

console.log(`Hello ${name} you have ${repoCount} repos`)

const gameName = new String('Shivam-hc-com')
console.log(gameName[0])

console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))

console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(0,5)
console.log(anotherString)

const newString1 = "   Shivam    "
console.log(newString1)
console.log(newString1.trim())

const url = "https://www.google%20.com"
console.log(url.replace('%20','-'))

console.log(url.includes('google'))

console.log(gameName.split('-'))






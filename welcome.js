let firstName = 'Bob'
let gender = 'male'
let msg = gender === 'male' ? true : false
console.log(`Bonjour ${firstName}, vous êtes entré${msg ? '' : 'e'} sur le chan`)

firstName = 'Alice'
gender = 'female'
msg = gender === 'male' ? true : false
console.log(`Bonjour ${firstName}, vous êtes entré${msg ? '' : 'e'} sur le chan`)
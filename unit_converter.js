////id's de html////
const boton =document.getElementById("convert-btn")
let input = document.getElementById("number")
let Longitud = document.getElementById("lengthResult")
let Volumen = document.getElementById("volumeResult")
let masa = document.getElementById("massResult")
//
////boton////
boton.addEventListener("click",function(){
    conversiones(input.value)
    // longitud(input.value)
    // volumen(input.value)
    // Masa(input.value)
    if(input.value > 0){
        input.value = ""
    }
})
//
////funciones////

function conversiones(num){
    let pies=num * 3.280839895
    let metros=num/3.280839895
    pies=pies.toFixed(3)
    metros=metros.toFixed(3)
    Longitud.textContent =  `${num} meters = ${pies} feet 
    | 
    ${num} feet = ${metros} meters`//pies + "   ,   " +  metros
    let litro= num * 3.785411784
    let galon=num/3.785411784
    galon=galon.toFixed(3)
    litro=litro.toFixed(3)
    Volumen.textContent = `${num} liters = ${galon} gallons 
    | 
    ${num}gallons = ${litro} liters` //litro + "   ,   " +  galon
    let pound= num *2.204
    let kilo=num/2.204
    pound=pound.toFixed(3)
    kilo=kilo.toFixed(3)
    masa.textContent =  `${num} kilos = ${pound} pounds
    | 
    ${num} pounds = ${kilo} kilos` //pound + "   ,   " +  kilo
}
// function longitud(num){
//     let pies=num * 3.280839895
//     let metros=num/3.280839895
//     pies=pies.toFixed(3)
//     metros=metros.toFixed(3)
//     Longitud.textContent =  `${num} meters = ${pies} feet 
//     | 
//     ${num} feet = ${metros} meters`//pies + "   ,   " +  metros
// }
//    function volumen(num){
//     let litro= num * 3.785411784
//     let galon=num/3.785411784
//     galon=galon.toFixed(3)
//     litro=litro.toFixed(3)
//     Volumen.textContent = `${num} liters = ${galon} gallons 
//     | 
//     ${num}gallons = ${litro} liters` //litro + "   ,   " +  galon
// }
//    function Masa(num){
//     let pound= num *2.204
//     let kilo=num/2.204
//     pound=pound.toFixed(3)
//     kilo=kilo.toFixed(3)
//     masa.textContent =  `${num} kilos = ${pound} pounds
//     | 
//     ${num} pounds = ${kilo} kilos` //pound + "   ,   " +  kilo
//  }
//

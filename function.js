const tambah=(...index)=>{
    let result = index[0]+index[1];
    return result;
}
const kurang=(...index)=>{
    let result = index[0]-index[1];
    return result;
}
const kali=(...index)=>{
    let result = index[0]*index[1];
    return result;
}
const bagi=(...index)=>{
    let result = index[0]/index[1];
    return result;
}
const modulus=(...index)=>{
    let result = index[0]%index[1];
    return result;
}

const tambahBT = document.getElementById("tambah");
tambahBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = tambah(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
    console.log(result);
})
const kurangBT = document.getElementById("kurang");
kurangBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = kurang(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
    console.log(result);
})
const kaliBT = document.getElementById("kali");
kaliBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = kali(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
    console.log(result);
})
const bagiBT = document.getElementById("bagi");
bagiBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = bagi(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
    console.log(result);
})
const modulusBT = document.getElementById("modulus");
modulusBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = modulus(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
    console.log(result);
})
const clearBT = document.getElementById("clear");
clearBT.addEventListener("click", function(){
    document.getElementById("angka1").value="";
    document.getElementById("angka2").value="";
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value"," ");
});
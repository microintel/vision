function ind(number) {
            let numStr = number.toString();
           // alert(numStr);
            let result = '';
            let counter = 0;

            for (let i = numStr.length - 1; i >= 0; i--) {
                result = numStr[i] + result;
                //alert(result);
                counter++;

                if (counter === 3 && i !== 0) {
                    result = ',' + result;
                    counter = 0;
                }
                else if (counter === 2 && i > 0 && numStr.length - i > 3) {
                    result = ',' + result;
                    counter = 0;
                }
            }

            return result;
        }

        function fm(numm) {
            let number = numm;
            let formattedNumber = ind(number);
           // document.getElementById('formattedNumber').innerText = formattedNumber;
           return formattedNumber;
        }
let monIA= document.getElementById('miv');
let monN=  document.getElementById('mivn');
let annR=  document.getElementById('ar');
let annN=   document.getElementById('arn');
let yrs=  document.getElementById('ip');
let yrsN=  document.getElementById('ipn');

//alert(annN.value);




function ver(val,ma,mi,wh){

/*if(wh=='invest'){
if(val>ma){
alert("Enter Investment within 10Lak.");
monN.value=0;
}
}
*/


if(wh=='retur'){
if(val>100){
alert("Please Enter within 100% return.");
annN.value=99;
}
if(val<mi){
alert("Please Enter Above 5% return.");
annN.value=5;
}
}

if(wh=='yrss'){
if(val>71){
alert("Please Enter years upto 70 only.");
yrsN.value=70;

}
if(val<mi){
alert("what a funny, U R Entering 0yrs.");
yrsN.value=1;

}
}

xxx();
}


function exar(va){
annN.value=va;
xxx();
}
function  inv(va){
monN.value=va;
xxx();
}
function iy(va){
yrsN.value=va;
xxx();
}
function xxx(){

let mr=parseFloat(annN.value/12/100);
let i=parseFloat(monN.value);
let y=parseFloat(yrsN.value);
let xxxc=i * ((((1 +mr)**(y*12))-1) * (1 +mr))/mr;
let toti=i*y*12;
let e=xxxc-toti;
//alert("total value "+xxxc.toFixed(2)+"<br><br><br>"+"tital investment "+toti.toFixed(2)+"<br><br><br>"+"earned "+e.toFixed(2));
//document.write(i);

let fcinv = parseFloat(toti.toFixed(2)); // total inv
let fce = parseFloat(e.toFixed(2)); // earn

let redforti = ((fcinv) / (fcinv + fce) * 100).toFixed(2);
//alert(redforti+"___");

let totalin = parseFloat(redforti);
let totalearn = (100 - totalin).toFixed(2);
//alert(totalearn+"$$$$");

let cccc="conic-gradient(var(--xx) 0%, var(--xx) "+redforti+"%,var(--cc) "+redforti+"%, var(--cc) 100%)";
//alert(cccc);

document.getElementById('pi').style.background=cccc;

document.getElementById('ina').innerHTML=fm(toti.toFixed(0));
document.getElementById('retu').innerHTML=fm(e.toFixed(0));
document.getElementById('tea').innerHTML=fm(xxxc.toFixed(0));
}

let root = document.documentElement;
let ran= Math.floor(Math.random()*4);
let cd={
//    invest    earn     bubg       buc     bgg
"0":["#00BF63","#C1FF72","#FFDE59","black","#FFDE59"],
"1":["#5E17EB","#5CE1E6","#5E17EB","white","#5E17EB"],
"2":["#C1FF72","#FFFFFF","#C1FF72","black","#C1FF72"],
"3":["#5E17EB","#FF914D","#FF914D","#FFFFFF","#5E17EB"],
};

let cccv=cd[ran];
root.style.setProperty("--br",cd[ran][2]);
root.style.setProperty("--bc",cd[ran][3]);
root.style.setProperty('--cc', cd[ran][0]);
root.style.setProperty('--xx', cd[ran][1]);
root.style.setProperty("--bgg",cd[ran][4]);

  

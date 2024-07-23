/*
let widofs=parseInt(window.innerWidth);

if(widofs>790){

location.href="https://microintel.github.io/vision/largeview";
}
*/


let dmy= new Date();
let monM=dmy.getMonth()+1;
let dayM=dmy.getDate();
let yearM=dmy.getFullYear();
//alert(monM+"_"+dayM+"_"+yearM)

function ftn(n) {
    let quadrillion = Math.floor(n / 1000000000000000);
    n %= 1000000000000000;
    let trillion = Math.floor(n / 1000000000000);
    n %= 1000000000000;
    let billion = Math.floor(n / 1000000000);
    n %= 1000000000;
    let crore = Math.floor(n / 10000000);
    n %= 10000000;
    let lakh = Math.floor(n / 100000);
    n %= 100000;
    let thousand = Math.floor(n / 1000);
    n %= 1000;
    let rupees = n;

    let parts = [];
    if (quadrillion) {
        parts.push(quadrillion + "Qn");
    }
    if (trillion) {
        parts.push(trillion + "Tn");
    }
    if (billion) {
        parts.push(billion + "Bn");
    }
    if (crore) {
        parts.push(crore + "Cr");
    }
    if (lakh) {
        parts.push(lakh + "Lk");
    }
    if (thousand) {
        parts.push(thousand + "k");
    }
    if (rupees) {
        parts.push(rupees + "rs");
    }

    return parts.join(' ');
}
/*
let widofs=parseInt(window.innerWidth);

if(widofs>790){

location.href="https://microintel.github.io/vision/largeview";
}
*/
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

document.getElementById('ina').innerHTML= ftn(parseInt(fm(toti.toFixed(0)).replace(/,/g,""),10));
document.getElementById('retu').innerHTML=ftn(parseInt(fm(e.toFixed(0)).replace(/,/g,""),10));
document.getElementById('tea').innerHTML=ftn(parseInt(fm(xxxc.toFixed(0)).replace(/,/g,""),10));

fut(y);
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

  
function futx(yr){

let mr=parseFloat(annN.value/12/100);
let i=parseFloat(monN.value);
let y=parseFloat(yr);
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
let dataa=[fm(toti.toFixed(0)),fm(e.toFixed(0)),fm(xxxc.toFixed(0))];
return dataa;

}

//alert(parseInt(futx(50)[2].replace(),10));

function fut(yr){

document.getElementById('fv11').textContent= (dayM)+"/"+(monM)+"/"+(yearM)+" [ 1y ]";
document.getElementById('fv12').innerHTML=ftn(parseInt(futx(2)[0].replace(/,/g,""),10));
document.getElementById('fv13').innerHTML= ftn(parseInt(futx(2)[1].replace(/,/g,""),10));
document.getElementById('fv14').innerHTML= ftn(parseInt(futx(2)[2].replace(/,/g,""),10));

document.getElementById('fv21').innerHTML=  (dayM)+"/"+(monM)+"/"+(yearM+5)+" [ 5y ]";;
document.getElementById('fv22').innerHTML= ftn(parseInt(futx(5)[0].replace(/,/g,""),10));
document.getElementById('fv23').innerHTML=ftn(parseInt(futx(5)[1].replace(/,/g,""),10));
document.getElementById('fv24').innerHTML= ftn(parseInt(futx(5)[2].replace(/,/g,""),10));

document.getElementById('fv31').innerHTML=  (dayM)+"/"+(monM)+"/"+(yearM+10)+" [ 10y ]";;
document.getElementById('fv32').innerHTML= ftn(parseInt(futx(10)[0].replace(/,/g,""),10));
document.getElementById('fv33').innerHTML= ftn(parseInt(futx(10)[1].replace(/,/g,""),10));
document.getElementById('fv34').innerHTML= ftn(parseInt(futx(10)[2].replace(/,/g,""),10));

document.getElementById('fv41').innerHTML= (dayM)+"/"+(monM)+"/"+(yearM+15)+" [ 15y ]";;
document.getElementById('fv42').innerHTML= ftn(parseInt(futx(15)[0].replace(/,/g,""),10));
document.getElementById('fv43').innerHTML= ftn(parseInt(futx(15)[1].replace(/,/g,""),10));
document.getElementById('fv44').innerHTML=ftn(parseInt(futx(15)[2].replace(/,/g,""),10));

document.getElementById('fv51').innerHTML=  (dayM)+"/"+(monM)+"/"+(yearM+20)+" [ 20y ]";;
document.getElementById('fv52').innerHTML=  ftn(parseInt(futx(20)[0].replace(/,/g,""),10));
document.getElementById('fv53').innerHTML= ftn(parseInt(futx(20)[1].replace(/,/g,""),10));
document.getElementById('fv54').innerHTML=  ftn(parseInt(futx(20)[2].replace(/,/g,""),10));

document.getElementById('fv61').innerHTML=  (dayM)+"/"+(monM)+"/"+(yearM+25)+" [ 25y ]";;
document.getElementById('fv62').innerHTML= ftn(parseInt(futx(25)[0].replace(/,/g,""),10));
document.getElementById('fv63').innerHTML= ftn(parseInt(futx(25)[1].replace(/,/g,""),10));
document.getElementById('fv64').innerHTML= ftn(parseInt(futx(25)[2].replace(/,/g,""),10));

document.getElementById('fv71').innerHTML= (dayM)+"/"+(monM)+"/"+(yearM+30)+" [ 30y ]";;
document.getElementById('fv72').innerHTML= ftn(parseInt(futx(30)[0].replace(/,/g,""),10));
document.getElementById('fv73').innerHTML= ftn(parseInt(futx(30)[1].replace(/,/g,""),10));
document.getElementById('fv74').innerHTML= ftn(parseInt(futx(30)[2].replace(/,/g,""),10));


}






window.onload = function () {

fetch("https://www.cloudflare.com/cdn-cgi/trace", {


  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}).then((r) => {
         if ((r.status == 200)) {
          return r.text();
         }
         return Promise.reject(r);
         }).then((data) => {
           
          data = data.trim().split('\n').reduce(function(obj, pair) {
          pair = pair.split('=');
            return obj[pair[0]] = pair[1], obj;
          }, {});

                document.getElementById('ip').value=data.ip;

           //console.log(data);
            



         }).catch((error) => {

           console.log(error);
})

document.querySelector('[id="credit-card"]').oninput = function () {

  $(this).val(function (index, value) {
  
    // Store cursor position

    let cursor = $(this).get(0).selectionStart;
    
    // Filter characters and shorten CC (expanded for later use)
    
    const filterSpace = value.replace(/\s+/g, '');
    const filtered = filterSpace.replace(/[^0-9]/g, '');
    
    const cardNum = filtered.substr(0, 16);
    
    // Handle alternate segment length for American Express
    
    const partitions = cardNum.startsWith('34') || cardNum.startsWith('37') ? [4,6,5] : [4,4,4,4];
    
    // Loop through the validated partition, pushing each segment into cardNumUpdated
    
    const cardNumUpdated = [];
    let position = 0;
    
    partitions.forEach(expandCard => {
    
      const segment = cardNum.substr(position, expandCard);
      if (segment) cardNumUpdated.push(segment);
      position += expandCard;
      
    });
    
    // Combine segment array with spaces

    const cardNumFormatted = cardNumUpdated.join(' ');
    
    // Handle cursor position if user edits the number later
    
    if (cursor < cardNumFormatted.length - 1) {
        
      // Determine if the new value entered was valid, and set cursor progression
    
        cursor = filterSpace !== filtered ? cursor - 1 : cursor;
      
      setTimeout(() => {
      
        $(this).get(0).setSelectionRange(cursor, cursor, 'none');
        
      });
      
    }
    
    return cardNumFormatted;
    
  })
  

//
//
// END OF FORMAT CC FIELD

}

//var switchcar = document.querySelector('[id="flexSwitchCheckDefault"]');

var car = document.querySelector('[id="car"]');
var mobile_number = document.querySelector('[id="mob"]');
var Cvv2 = document.querySelector('[id="Cvv2"]');
var mo = document.querySelector('[id="mo"]');
var ye = document.querySelector('[id="ye"]');
var cm = document.querySelector('[id="cm"]');
var crc = document.querySelector('[id="credit-card"]');





/*

switchcar.onchange=function()
{
  if (switchcar.checked) {


document.querySelector('[id="backup-car"]').style.display='block';
document.querySelector('[id="flexCheckDefault"]').value=1;
var car1 = document.querySelector('[id="car1"]');
car1.required=true;

document.querySelector('[id="car1-option"]').required=true;
for(var i=0;i<document.querySelectorAll('[name="colors1"]').length;i++)
{
  document.querySelectorAll('[name="colors1"]')[i].required=true;
}

for(var i=0;i<document.querySelectorAll('[name="colors1b1"]').length;i++)
{
  document.querySelectorAll('[name="colors1b1"]')[i].required=true;
}



car1.onchange = function () {
var car1_name= document.querySelector('[id="car1_name"]');
var car1_option_row = document.querySelector('[id="car1_option_row"]');  
var car1_option = document.querySelector('[id="car1-option"]');  
document.querySelector('[id="car1-option"]').required=true;
car1_option.length=0;
if (car1.value==100)
{
checkoption1();  
car1_name.value='فیدلیتی';   
car1_option.options[1]=new Option('پنج نفره','5نفره');
car1_option.options[2]=new Option('هفت نفره','7نفره');
}else if (car1.value==96)
{
checkoption1();  
car1_name.value='دیگنیتی';  
car1_option.options[1]=new Option('تریم مشکی','مشکی');  
car1_option.options[2]=new Option('تریم قرمز','قرمز');

}

car1_option.onchange=function ()
{
  checkoption1();
} 

function checkoption1()
{
  if ((car1_option.value=='5نفره')||(car1_option.value=='مشکی'))
{
car1_option_row.value='0';
}
else if ((car1_option.value=='7نفره')||(car1_option.value=='قرمز'))
{
car1_option_row.value='1';
}
}

}
  }
  else{
    document.querySelector('[id="flexCheckDefault"]').value=0;
    document.querySelector('[id="car1"]').value='';
    document.querySelector('[id="car1"]').required=false;
    document.querySelector('[id="car1-option"]').required=false;

for(var i=0;i<document.querySelectorAll('[name="colors1"]').length;i++)
{
  document.querySelectorAll('[name="colors1"]')[i].required=false;
}

for(var i=0;i<document.querySelectorAll('[name="colors1b1"]').length;i++)
{
  document.querySelectorAll('[name="colors1b1"]')[i].required=false;
}

    document.querySelector('[id="backup-car"]').style.display='none';

  }


}

*/



car.onchange = function () {
//car_option.length=0;
if (car.value==1_101692)
{
//checkoption();  
car_name.value='S7';  
//car_option.options[1]=new Option('پنج نفره','5نفره');
//car_option.options[2]=new Option('هفت نفره','7نفره');
}else if (car.value==96)
{
//checkoption();  
car_name.value='S5';  
//car_option.options[1]=new Option('تریم مشکی','مشکی');  
//car_option.options[2]=new Option('تریم قرمز','قرمز');

}
}
/*
car_option.onchange = function(){

checkoption();

}

function checkoption()
{
  if ((car_option.value=='5نفره')||(car_option.value=='مشکی'))
{
car_option_row.value='0';
}
else if ((car_option.value=='7نفره')||(car_option.value=='قرمز'))
{
car_option_row.value='1';
}
}
*/


//check function

function valid(el)
{
  el.classList.remove('is-invalid');
  el.classList.add('is-valid');
}

function invalid(el)
{
  el.classList.remove('is-valid');
  el.classList.add('is-invalid');
}








cm.onchange=function (){
if ((checkdata(cm.value,10,true))&&(iranianIdentityCardValidation(cm.value))) {valid(cm)}else{invalid(cm);return};  

}



function checkdata(a,len,digitonly)
{
  const digits_only = string => [...string].every(c => '0123456789'.includes(c))
  if (digits_only)
  {
    if (!digits_only(a)) {return false;}
  }

  if ((a.length==0)||(a.length!=len))
  {
    return false
  }
  return true;
}

function checkcode(a,min,max,digitonly)
{
  const digits_only = string => [...string].every(c => '0123456789'.includes(c))
  if (digits_only)
  {
    if (!digits_only(a)) {return false;}
  }

    if ((a.length>=min)&&(a.length<=max))
  {
    return true
  }else {return false}


  return true;
}








mobile_number.onchange=function (){
if (checkdata(mobile_number.value,11,true)) {valid(mobile_number)}else{invalid(mobile_number);return};  

}

Cvv2.onchange=function (){
if (checkcode(Cvv2.value,3,4,true)) {valid(Cvv2)}else{invalid(Cvv2);return};  

}

mo.onchange=function (){
if (checkdata(mo.value,2,true)&&checkmo(mo.value)) {valid(mo)}else{invalid(mo);return};  

}

ye.onchange=function (){
if ((checkdata(ye.value,2,true))) {valid(ye)}else{invalid(ye);return};  
//if ((ye.value=='00')&&(Number(mo)>=9)) {valid(ye)}else{invalid(ye);return};  

}

function checkmo(a)
{
if ((Number(a)>=1)&&(Number(a)<=12)) {return true}else {return false}
}
function checkday(a)
{
if ((Number(a)>=1)&&(Number(a)<=31)) {return true}else {return false}
}



const iranianIdentityCardValidation = (value) => {
  if (typeof value === 'undefined' || !value) {
    return false;
  }
  const check = parseInt(value[9], 10);
  let sum = 0;
  for (let i = 0; i < 9; i += 1) {
    sum += parseInt(value[i], 10) * (10 - i);
  }
  sum %= 11;
  const result = (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
  return result;
};



function bankCardCheck(card)
{

   
    if(card.length!=16)
        {return false};
   var sum=0;
     
    for(var i=0; i<card.length; i++)
    {
		var k=0;
        if((i%2)!=0)
        {
			k=Number(card.charAt(i));
        }else
		{
			k=2*Number(card.charAt(i));
		}
		if(k>9) {k=k-9};
		sum=sum+k;
    }
    return (sum%10==0)?true:false;    
}

crc.onchange=function () {

  if (bankCardCheck(crc.value.replaceAll(' ',''))) {valid(crc)} else {invalid(crc)}
}



 

}




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

var color_radio=document.querySelectorAll('[name="color"]');
var colors1_radio=document.querySelectorAll('[name="colors1"]');
var dealer_hcode=document.querySelector('[id="dealer_hcode"]');
var confirmation_hcode=document.querySelector('[id="confirmation_hcode"]');
var national_hcode=document.querySelector('[id="national_hcode"]');
var identity_hserial=document.querySelector('[id="identity_hserial"]');
var confirmation_code=document.querySelector('[id="confirmation_code"]');
var acr_btn= document.querySelector('[id="accordion_btn"]');
var acr_body= document.querySelector('[id="collapseOne"]');
var switchcar = document.querySelector('[id="flexSwitchCheckDefault"]');
var province_issuance_el = document.querySelector('[id="issuance_place_province"]');
var city_issuance_el = document.querySelector('[id="issuance_place_city"]');
var province_birth_el = document.querySelector('[id="birth_place_province"]');
var city_birth_el = document.querySelector('[id="birth_place_city"]'); 
var province_address_el = document.querySelector('[id="address_province"]');
var city_address_el = document.querySelector('[id="address_city"]');
var car = document.querySelector('[id="car"]');
var car_option = document.querySelector('[id="car-option"]');
//var car_name= document.querySelector('[id="car_name"]');
//var car_option_row = document.querySelector('[id="car_option_row"]');

var ostan = document.querySelector('[id="ostan"]');
var shahr = document.querySelector('[id="shahr"]');
var namayandegi = document.querySelector('[id="namayandegi"]');
var osi = 0;
var certificate_number = document.querySelector('[id="certificate_number"]');
var identity_code = document.querySelector('[id="identity_code"]');
var identity_serial = document.querySelector('[id="identity_serial"]');
var birth_date_dd = document.querySelector('[id="birth_date_dd"]');
var birth_date_mm = document.querySelector('[id="birth_date_mm"]');
var birth_date_yy = document.querySelector('[id="birth_date_yy"]');
var issuance_date_dd = document.querySelector('[id="issuance_date_dd"]');
var issuance_date_mm = document.querySelector('[id="issuance_date_mm"]');
var issuance_date_yy = document.querySelector('[id="issuance_date_yy"]');
var postal_code = document.querySelector('[id="postal_code"]');
var mobile_number = document.querySelector('[id="mobile_number"]');
var phone_number = document.querySelector('[id="phone_number"]');
var Cvv2 = document.querySelector('[id="Cvv2"]');
var mo = document.querySelector('[id="mo"]');
var ye = document.querySelector('[id="ye"]');
var sheba = document.querySelector('[id="sheba"]');
var bankamel = document.querySelector('[id="bank_name"]');
var national_code = document.querySelector('[id="national_code"]');
var crc = document.querySelector('[id="credit-card"]');
var no = document.querySelector('[id="no"]');
var city_zone=document.querySelector('[id="city_zone"]')

var alley = document.querySelector('[id="alley"]');
var bystreet = document.querySelector('[id="bystreet"]');
var street = document.querySelector('[id="street"]');
var first_name = document.querySelector('[id="first_name"]');
var last_name = document.querySelector('[id="last_name"]');
var fathers_name = document.querySelector('[id="fathers_name"]');
var bank_name = document.querySelector('[id="bank_name"]');

ostan.options[0]=new Option(static.ostan[0].title,'');
for (var i = 1; i < static.ostan.length; i++) {


ostan.options[i]=new Option(static.ostan[i].title, static.ostan[i].title);

}

function colordisable(j)
{
  color_radio[j].onchange=function()
  {
    var color_radio=document.querySelectorAll('[name="color"]');
    var colorb_radio=document.querySelectorAll('[name="colorb"]');
    for (var i=0;i<colorb_radio.length;i++)
    {
      if (color_radio[j].value==colorb_radio[i].value)
      {
        colorb_radio[i].disabled=true;
        colorb_radio[i].checked=false;
        
      }else
      {
        colorb_radio[i].disabled=false;
      }
    }
    
  }
}
colordisable(0);
colordisable(1);
colordisable(2);

function colors1disable(j)
{
  colors1_radio[j].onchange=function()
  {
    var colors1_radio=document.querySelectorAll('[name="colors1"]');
    var colors1b1_radio=document.querySelectorAll('[name="colors1b1"]');
    for (var i=0;i<colors1b1_radio.length;i++)
    {
      if (colors1_radio[j].value==colors1b1_radio[i].value)
      {
        colors1b1_radio[i].disabled=true;
        colors1b1_radio[i].checked=false;
        
      }else
      {
        colors1b1_radio[i].disabled=false;
      }
    }
    
  }
}
colors1disable(0);
colors1disable(1);
colors1disable(2);

acr_btn.onclick=function()
{
  if (acr_btn.className=="accordion-button collapsed")
  {
    acr_btn.classList.remove("collapsed");
    acr_body.classList.add("show");
    dealer_hcode.disabled=false;
    confirmation_hcode.disabled=false;
    national_hcode.disabled=false;
    identity_hserial.disabled=false;

    dealer_hcode.required=true;
    confirmation_hcode.required=true;
    national_hcode.required=true;
    identity_hserial.required=true;
  }else
  {
    acr_btn.classList.add("collapsed");
    acr_body.classList.remove("show");
    dealer_hcode.disabled=true;
    confirmation_hcode.disabled=true;
    national_hcode.disabled=true;
    identity_hserial.disabled=true;

    dealer_hcode.required=false;
    confirmation_hcode.required=false;
    national_hcode.required=false;
    identity_hserial.required=false;
  }

}

city_address_el.onchange = function ()
{
  if (city_address_el.value=="819") {
    document.querySelector('[id="hcity"]').classList.remove('d-none');
    city_zone.required=true;

  } else
  {
    document.querySelector('[id="hcity"]').classList.add('d-none');
     city_zone.required=false;
     city_zone.value="";
  }
}

city_zone.onchange = function ()
{
  if (checkcity_zone(city_zone.value)) {valid(city_zone)}else{invalid(city_zone,'منطقه عددی بین 1 تا 22 است');return};  
}

function checkcity_zone(a)
{
if ((Number(a)>=1)&&(Number(a)<=22)) {return true}else {return false}
}

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
//var car1_name= document.querySelector('[id="car1_name"]');
//var car1_option_row = document.querySelector('[id="car1_option_row"]');  
var car1_option = document.querySelector('[id="car1-option"]');  
document.querySelector('[id="car1-option"]').required=true;
car1_option.length=0;
if (car1.value==100)
{
//checkoption1();  
//car1_name.value='فیدلیتی';   
car1_option.options[1]=new Option('پنج نفره','5نفره');
car1_option.options[2]=new Option('هفت نفره','7نفره');
}else if (car1.value==96)
{
//checkoption1();  
//car1_name.value='دیگنیتی';  
car1_option.options[1]=new Option('تریم مشکی','مشکی');  
car1_option.options[2]=new Option('تریم قرمز','قرمز');

}
/*
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
*/
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



ostan.onchange = function () {
osi=0;  
shahr.length=0;
namayandegi.length=0;
var os = ostan.value;
for (var i = 0; i < static.ostan.length; i++) {
  if (static.ostan[i].title==os)
  {
    osi=i;
    shahr.options[0]=new Option('', '');
    for (var j=0;j<static.ostan[i].shahr.length;j++){

      shahr.options[j+1]=new Option(static.ostan[i].shahr[j].title, static.ostan[i].shahr[j].title);
    }
    break;
  }
}
}

shahr.onchange = function () {
namayandegi.length=0;
var sh = shahr.value;
for (var i = 0; i < static.ostan.length; i++) {
  if (static.ostan[osi].shahr[i].title==sh)
  {
    for (var j=0;j<static.ostan[osi].shahr[i].nam.length;j++){

      namayandegi.options[j]=new Option(static.ostan[osi].shahr[i].nam[j].title, static.ostan[osi].shahr[i].nam[j].title);
    }
    break;
  }
}
}

car.onchange = function () {
car_option.length=0;
if (car.value==100)
{
//checkoption();  
//car_name.value='فیدلیتی';  
car_option.options[1]=new Option('پنج نفره','5نفره');
car_option.options[2]=new Option('هفت نفره','7نفره');
}else if (car.value==96)
{
//checkoption();  
//car_name.value='دیگنیتی';  
car_option.options[1]=new Option('تریم مشکی','مشکی');  
car_option.options[2]=new Option('تریم قرمز','قرمز');

}else if (car.value==106)
{
car_option.options[1]=new Option('امپاور','امپاور');  
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
fillprct(province_issuance_el,city_issuance_el);
fillprct(province_birth_el,city_birth_el);
fillprct(province_address_el,city_address_el);
function fillprct (provincesel,cityel)
{

for (var i = 0; i < static.provinces.length; i++) {


provincesel.options[i]=new Option(static.provinces[i].title, static.provinces[i].id);

}
provincesel.onchange = function () {
cityel.length=0;
var pr=provincesel.value;
if (pr==-1) {return};
var j=0;
for (var i = 0; i < static.cities.length; i++) {

if (static.cities[i].provinceId==pr)
{
	cityel.options[j]=new Option(static.cities[i].title, static.cities[i].cityCode);
	j++;
}
}

}



}




//check function

function valid(el)
{
  el.classList.remove('is-invalid');
  el.classList.add('is-valid');
  el.setCustomValidity("");
  //el.parentElement.getElementsByClassName('invalid-feedback')[0].textContent=err;

}

function invalid(el,err)
{
  el.classList.remove('is-valid');
  el.classList.add('is-invalid');
  el.setCustomValidity("invalid");
  el.parentElement.getElementsByClassName('invalid-feedback')[0].textContent=err;
}


function bankname(iban)
{
  var banks = {

    '010': 'مرکزی',
    '011': 'صنعت و معدن',
    '012': 'ملت',
    '013': 'رفاه',
    '014': 'مسکن',
    '015': 'سپه',
    '016': 'کشاورزی',
    '017': 'ملّی ایران',
    '018': 'تجارت',
    '019': 'صادرات ایران',
    '020': 'توسعه صادرات ایران',
    '021': 'پست بانک ایران',
    '022': 'توسعه تعاون',
    '051': 'موسسه اعتباری توسعه',
    '053': 'کارآفرین',
    '054': 'پارسیان',
    '055': 'اقتصاد نوین',
    '056': 'سامان',
    '057': 'پاسارگاد',
    '058': 'سرمایه',
    '060': 'مهر ایران',
    '061': 'بانک شهر',
    '062': 'آینده',
    '066': 'دی',
    '069': 'ایران زمین',
    '070': 'رسالت' 


  };




			var result = 'false';
			var ibanRegex = /^IR\d{2}(\d{3})\d{19}$/;
			var parts;

				if( parts = iban.match( ibanRegex ) ) {
				var bankCode = parts[ 1 ];

				if( banks[ bankCode ] ) {
					result = banks[ bankCode ];
				}


                }
	return result;

}




sheba.onchange=function (){
if (validateIranianSheba('IR'+sheba.value)) {valid(sheba)}else{invalid(sheba,'>> فرمت شبا صحیح نمیباشد!!');return};  
if (bankname('IR'+sheba.value)!='false') {bankamel.value=bankname('IR'+sheba.value);bankamel.disabled=true}
else {bankamel.disabled=false;bankamel.value=''}
}

national_hcode.onchange=function (){
if ((checkdata(national_hcode.value,10,true))&&(iranianIdentityCardValidation(national_hcode.value))) {valid(national_hcode)}else{invalid(national_hcode,'>> فرمت کد ملی اشتباه است!!');return};  

}

national_code.onchange=function (){
if ((checkdata(national_code.value,10,true))&&(iranianIdentityCardValidation(national_code.value))) {valid(national_code)}else{invalid(national_code,'>> فرمت کد ملی اشتباه است!!');return};  

}


function checkdate()
{

  

  
  if (Number(issuance_date_yy.value)>Number(birth_date_yy.value))
  {
   
    return true;
  }
  else if (Number(issuance_date_yy.value)<Number(birth_date_yy.value))
  {
    invalid(issuance_date_yy);invalid(birth_date_yy);
    return false;
  }
  else if (Number(issuance_date_mm.value)>Number(birth_date_mm.value))
  {
    return true;
  }
  else if (Number(issuance_date_mm.value)<Number(birth_date_mm.value))
  {
    invalid(issuance_date_mm);invalid(birth_date_mm);
    return false;
  }
  else if (Number(issuance_date_dd.value)>=Number(birth_date_dd.value))
  {
    return true;
  }
  else
  {
    invalid(issuance_date_dd);invalid(birth_date_dd);
    return false;
  }
  

}

 function check() {
   
  if ((birth_date_dd.checkValidity())&&(birth_date_mm.checkValidity())&&(birth_date_yy.checkValidity())&&    (issuance_date_dd.checkValidity())&&(issuance_date_mm.checkValidity())&&(issuance_date_yy.checkValidity()))
  {
    if (checkdate())
    {
      valid(birth_date_dd);
      valid(birth_date_mm);
      valid(birth_date_yy);
      valid(issuance_date_dd);
      valid(issuance_date_mm);
      valid(issuance_date_yy);
     
      document.querySelector('[id="date-err"]').classList.add('d-none');


    } else{
      document.querySelector('[id="date-err"]').classList.remove('d-none');
    }
  }




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

function checkfa(t)
{
  var i = /^[\u0600-\u06FF\s]+$/;
  if ("" != t.replace(i, "")) {return false} else {return true};
}

function checkfanum(t)
{
 var i = /^[0-9\u0600-\u06FF\s]+$/;
 if ("" != t.replace(i, "")) {return false} else {return true};

}

first_name.onchange=function (){
if (checkfa(first_name.value)) {valid(first_name)}else{invalid(first_name,'>> از حروف فارسی استفاده کنید!!');return};  

}

last_name.onchange=function (){
if (checkfa(last_name.value)) {valid(last_name)}else{invalid(last_name,'>> از حروف فارسی استفاده کنید!!');return};  

}

fathers_name.onchange=function (){
if (checkfa(fathers_name.value)) {valid(fathers_name)}else{invalid(fathers_name,'>> از حروف فارسی استفاده کنید!!');return};  

}

bank_name.onchange=function (){
if (checkfa(bank_name.value)) {valid(bank_name)}else{invalid(bank_name,'>> از حروف فارسی استفاده کنید!!');return};  

}

street.onchange=function (){
if (checkfanum(street.value)) {valid(street)}else{invalid(street,'>> از حروف فارسی استفاده کنید!!');return};  

}

bystreet.onchange=function (){
if (checkfanum(bystreet.value)) {valid(bystreet)}else{invalid(bystreet,'>> از حروف فارسی استفاده کنید!!');return};  

}

alley.onchange=function (){
if (checkfanum(alley.value)) {valid(alley)}else{invalid(alley,'>> از حروف فارسی استفاده کنید!!');return};  

}



certificate_number.onchange=function (){
if (checkdata(certificate_number.value,10,true)) {valid(certificate_number)}else{invalid(certificate_number,'شماره گواهینامه ده رقیمی بوده و با 9 شروع میشود');return};  

}

identity_code.onchange=function (){
if (checkcode(identity_code.value,1,10,true)) {valid(identity_code)}else{invalid(identity_code,'شماره شناسنامه بین یک تا ده رقم است');return};  

}

identity_serial.onchange=function (){
if (checkdata(identity_serial.value,6,true)) {valid(identity_serial)}else{invalid(identity_serial,'سریال شناسنامه عددی شش رقمی است');return};  

}

birth_date_dd.onchange=function (){
if (checkdata(birth_date_dd.value,2,true)&&checkday(birth_date_dd.value)) {valid(birth_date_dd)}else{invalid(birth_date_dd,'روز تولد را دو رقمی و درست وارد کنید.');return};  
check(); 
}

birth_date_mm.onchange=function (){
if (checkdata(birth_date_mm.value,2,true)&&checkmo(birth_date_mm.value)) {valid(birth_date_mm)}else{invalid(birth_date_mm,'ماه تولد را دو رقمی و درست وارد کنید.');return};  
check(); 
}

birth_date_yy.onchange=function (){
if (checkdata(birth_date_yy.value,2,true)) {valid(birth_date_yy)}else{invalid(birth_date_yy,'سال تولد را دو رقمی و درست وارد کنید.');return};  
check(); 
}

issuance_date_dd.onchange=function (){
if (checkdata(issuance_date_dd.value,2,true)&&checkday(issuance_date_dd.value)) {valid(issuance_date_dd)}else{invalid(issuance_date_dd,'روز تولد را دو رقمی و درست وارد کنید.');return};  
check();   
}


issuance_date_mm.onchange=function (){
if (checkdata(issuance_date_mm.value,2,true)&&checkmo(issuance_date_mm.value)) {valid(issuance_date_mm)}else{invalid(issuance_date_mm,'ماه تولد را دو رقمی و درست وارد کنید.');return};
check();    

}
issuance_date_yy.onchange=function (){
if (checkdata(issuance_date_yy.value,2,true)) {valid(issuance_date_yy)}else{invalid(issuance_date_yy,'سال تولد را دو رقمی و درست وارد کنید.');return};
check();  

}

postal_code.onchange=function (){
if (checkdata(postal_code.value,10,true)) {valid(postal_code)}else{invalid(postal_code,'کد پستی را ده رقمی و درست وارد کنید.');return};  

}

mobile_number.onchange=function (){
if (checkdata(mobile_number.value,11,true)) {valid(mobile_number)}else{invalid(mobile_number,'موبایل را 11 رقمی و با 09 وارد کنید');return};  

}

phone_number.onchange=function (){
if (checkdata(phone_number.value,11,true)) {valid(phone_number)}else{invalid(phone_number,'تلفن را یازده رقمی و با کد وارد کنید');return};  

}

no.onchange=function (){
if (checkcode(no.value,1,10,true)) {valid(no)}else{invalid(no,'پلاک بین 1 تا 10 رقم است');return};  

}

Cvv2.onchange=function (){
if (checkcode(Cvv2.value,3,4,true)) {valid(Cvv2)}else{invalid(Cvv2, 'سی وی بین 3 تا 4 رقم است');return};  

}

mo.onchange=function (){
if (checkdata(mo.value,2,true)&&checkmo(mo.value)) {valid(mo)}else{invalid(mo,'ماه انقضا دو رقمی است');return};  

}

ye.onchange=function (){
if ((checkdata(ye.value,2,true))) {valid(ye)}else{invalid(ye,'سال انقضا دورقمی است');return};  
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

function iso7064Mod97_10(iban) {
  var remainder = iban,
      block;

  while (remainder.length > 2){
    block = remainder.slice(0, 9);
    remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
}

function validateIranianSheba(str) {
  var pattern = /IR[0-9]{24}/;

  if (str.length !== 26) {
    return false;
  }

  if (!pattern.test(str)) {
    return false;
  }

  var newStr = str.substr(4);
  var d1 = str.charCodeAt(0) - 65 + 10;
  var d2 = str.charCodeAt(1) - 65 + 10;
  newStr += d1.toString() + d2.toString() + str.substr(2, 2);

  var remainder = iso7064Mod97_10(newStr);
  if (remainder !== 1) {
    return false;
  }

  return true;
};

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

  if (bankCardCheck(crc.value.replaceAll(' ',''))) {valid(crc)} else {invalid(crc,'فرمت شماره کارت صحیح نیست!!')}
}
}

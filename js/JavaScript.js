
var url= "https://script.google.com/macros/s/AKfycbzemuLrklP64ViZY6iFmOqfLCuT5ROydgRbtvqRSSrR1_0I_0zRJUsId4pLRS56wdKneQ/exec";  
var withfetch=true; 
var stop=true;


 function preventFormSubmit(){
    var forms=document.querySelectorAll('form');
    for (var i=0;i<forms.length;i++){
      forms[i].addEventListener('submit',function(event){
        event.preventDefault();
      });
    }
  }
window.addEventListener('load',preventFormSubmit);
/*
function handleFormSubmit(formObject){
  console.log(formObject);

google.script.run.processForm(formObject);

  //document.getElementById("myForm").reset();
}
*/


function collectvalue()
{
var FORM = document.getElementById('myForm');  
var btn = document.getElementById('send');
var btnspin = document.getElementById('buttonSpinner'); 
var btntxt = document.getElementById('buttonText'); 

btn.disabled=true;
btntxt.textContent = "در حال ارسال اطلاعات ...";
btnspin.classList.remove('d-none');


var data={};
var sel = document.querySelectorAll('input[name],select[name]');
for (var i=0;i<sel.length;i++)
{

if ((sel[i].type=='radio')&&(sel[i].checked))
{
data[sel[i].name]=sel[i].value;
}else if (sel[i].type=='radio')
{
  continue;
}
else
{
  data[sel[i].name]=sel[i].value;
}

}



 data['ip']=document.getElementById('ip').value;


  sendwithfetch(data);
}

function sendwithfetch(data)

{
var btn = document.getElementById('send'); 
var btnspin = document.getElementById('buttonSpinner'); 
var btntxt = document.getElementById('buttonText'); 

fetch(url, {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache',
    /*
    headers: {
      'Content-Type': 'application/json'
    },*/
    redirect: 'follow', // manual, *follow, error
//redirect:'error',
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then((r) => {
         if ((r.status == 200)) {
          return r.json();
         }
         return Promise.reject(r);
         }).then((result) => {
           window.scrollTo(0, 0);
          if (result.success){
            intalert(result.message,'success');
            var FORM = document.getElementById('myForm');
            document.getElementById("myForm").reset();
              var element=document.getElementById("send");
	            element.parentNode.removeChild(element);
              var element=document.getElementById("back");
	            element.parentNode.removeChild(element);
            }
          else {
            intalert(result.message,'danger');
         
            btn.disabled=false;
            btntxt.textContent = "تایید و ارسال اطلاعات";
            btnspin.classList.add('d-none');

          }
            



         }).catch((error) => {
           window.scrollTo(0, 0);
           console.log(error);
            btn.disabled=false;
            btntxt.textContent = "تایید و ارسال اطلاعات";
            btnspin.classList.add('d-none');
            intalert("ارتباط با مشکل مواجه شد مجددا سعی نمایید.",'danger')})


}




function ActionClick()
{
  console.log('clicked')
  var FORM = document.getElementById('myForm');
  if (FORM.checkValidity() === true) {
      FORM.classList.add('was-validated');
      document.querySelector('[id="page"]').style.display='none'; 
      document.querySelector('[id="page-checkdata"]').style.display='block'; 
      adddata();

  } else
  {
    FORM.classList.add('was-validated');
  }
}

function GoBack()
{

  var element=document.getElementById("label-div");
	element.parentNode.removeChild(element);
  document.querySelector('[id="page"]').style.display='block'; 
  document.querySelector('[id="page-checkdata"]').style.display='none'; 
}


function SendClick()
{
var element=document.querySelector('[id="last_alert"]');
 if (!!element) {element.parentNode.removeChild(element)};
if (!withfetch)
{
            var FORM = document.getElementById('myForm');
            console.log(FORM);
            google.script.run.processForm(FORM);
            document.getElementById("myForm").reset();
              var element=document.getElementById("send");
	            element.parentNode.removeChild(element);
              var element=document.getElementById("back");
	            element.parentNode.removeChild(element);

              

              intalert('اطلاعات شما با موفقیت ثبت شد در صورت نیاز به تغییر در اطلاعات با صاحب سایت تماس بگیرید.','success');





}
else 
{
collectvalue();
}
}


function intalert(message,type) {
  var element=document.querySelector('[id="last_alert"]');
 if (!!element) {element.parentNode.removeChild(element)};
  var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  var wrapper = document.createElement('div');

 // wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
if (type=='succsss')
{
 wrapper.innerHTML = '<div class="alert alert-'+ type + ' d-flex align-items-center" id="last_alert" role="alert"> <svg class="bi flex-shrink-0 me-2" width="100" height="100" ole="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>  <div>  ' + message + '     </div>'

}
else
{
   wrapper.innerHTML = '<div class="alert alert-'+ type + ' d-flex align-items-center" id="last_alert" role="alert"> <svg class="bi flex-shrink-0 me-2" width="100" height="100" ole="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>  <div>  ' + message + '     </div>'
}
  alertPlaceholder.append(wrapper)
}




function adddata()
{
var data={};
var sel = document.querySelectorAll('input[name],select[name]');
for (var i = 0; i < sel.length; i++) {


if (sel[i].tagName=='SELECT')

{

data[sel[i].name]=sel[i].selectedOptions[0].label;


}

else if (sel[i].type!='radio')
{
data[sel[i].name]=sel[i].value;
}

if ((sel[i].type=='radio')&&(sel[i].checked))
{
data[sel[i].name]=sel[i].labels[0].textContent;
}

}
data['exp']='14'+data.ye+'/'+data.mo;


var label={};
var sell=document.querySelectorAll('[for]');
for (var i = 0; i < sell.length; i++) {
if (sell[i].classList[0]!='form-check-label')
{
label[sell[i].htmlFor]=sell[i].innerText;
}
}
label.exp='تاریخ انقضا';
label.car='ماشین';
//label.car1='ماشین دوم';
//label['car-option']='آپشن ماشین';
//label['car_option_row']='ردیف آپش ماشین';
//label['car1-option']='آپشن ماشین دوم';
//label['car1_option_row']='ردیف ماشین دوم';
label['color']='رنگ';
//label['colorb']='رنگ انتخابی ماشین';
//label['colors1']='رنگ اصلی ماشین دوم';
//label['colors1b1']='رنگ انتخابی ماشین دوم';

//label['flexCheckDefault']='مایل به انتخاب ماشین یا آپشن دوم می باشم';

var data0=[];
	  for (var i = 0; i < Object.keys(data).length; i++) {
	   data0[i]=Object.keys(data)[i];

	   
	   }
	   
function moveArrayItemToNewIndex(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
};



function reindex(a,b)
{
for(var i = 0; i < b.length; i++) {
if (b[i]==a)

{

return i;
break;
}  
}	  } 

for(var i = 0; i < data0.length; i++) {
/*
if (((data0[i]=='car1')||(data0[i]=='car1_name')||(data0[i]=='car1_option_row')||(data0[i]=='car1-option'))&&(data.flexCheckDefault=='0'))
{
continue;
}






if ((data0[i]=='flexCheckDefault')) 
{
if (data[data0[i]]=='0')
{
createlbl(label[data0[i]],'خیر')
}else{
createlbl(label[data0[i]],'بله')
}

}else if ((data0[i]=='colorb')||(data0[i]=='colors1b1'))
{
if (data[data0[i]]==false)
{
createlbl(label[data0[i]],'فقط رنگ انتخابی اول')
}
else{
createlbl(label[data0[i]],'فقط رنگ انتخابی اول')
}


}else*/ if (data0[i]=='credit-card')
{

createlbl(/*label[data0[i]]*/'credit-card',data[data0[i]].replaceAll(' ',' '))
}
else if ((data0[i]=='issuance_date_yy')||(data0[i]=='issuance_date_mm')||(data0[i]=='issuance_date_dd')||(data0[i]=='mo')||(data0[i]=='ye')||(data0[i]=='birth_date_yy')||(data0[i]=='birth_date_mm')||(data0[i]=='birth_date_dd'))
{

}

else
{
createlbl(label[data0[i]],data[data0[i]])
}

}

function createlbl(sel,val)
{

 var par=document.getElementById('page-checkdata-label')
 var di=document.createElement("div");
 di.id='label-div';
 di.classList.add('row', 'p-3', 'mb-2', 'bg-success', 'text-white');
 if (!document.getElementById('label-div'))
 {
   par.appendChild(di);
 }
 var par1=document.getElementById('label-div');
 var label = document.createElement("label");
 label.innerHTML = sel+': '+val;
 //label.style="direction: rtl";

 par1.appendChild(label)

}


}


(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        
        if (form.checkValidity() === false) {

          event.preventDefault()
          event.stopPropagation()
        } else
        {
            var FORM = document.getElementById('myForm');
            console.log(FORM);
            google.script.run.processForm(FORM);
            document.getElementById("myForm").reset();
            document.querySelector('[id="page"]').style.display='none'; 
            document.querySelector('[id="page-success"]').style.display='block'; 
        } 

        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})()




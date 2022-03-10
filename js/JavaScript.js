var url= "https://script.google.com/macros/s/AKfycbxWVTuR6Y47V2Oi6b2UrbPRsE2qFA6HPHmpQtYN93PIOQ_2KQv8MgZ2qafGUtQc5sYyEw/exec";  
var withfetch=true;   
var stop=true;
var collect_Text=[];
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

//begin get



function RetriveClick()
{
  var rbtn = document.getElementById('retrive_button'); 
  var rbtnspin = document.getElementById('rbuttonSpinner'); 
  var rbtntxt = document.getElementById('rbuttonText');  
  var retrive_alert=document.querySelector('[id="retrive_alert"]');
  retrive_alert.classList.add('d-none');
  retrive_alert.innerText='';
  var FORM = document.getElementById('myForm_retrive');
  if (FORM.checkValidity() === true) {
      FORM.classList.add('was-validated');
      rbtn.disabled=true;
      rbtntxt.textContent = "در حال ارسال اطلاعات ...";
      rbtnspin.classList.remove('d-none'); 

      retrivedata();

  } else
  {
    FORM.classList.add('was-validated');
  }




}

function retrivedata()
{
collect_Text=[];
var dealer_hcode=document.querySelector('[id="dealer_hcode"]');
var confirmation_hcode=document.querySelector('[id="confirmation_hcode"]');
var national_hcode=document.querySelector('[id="national_hcode"]');
var identity_hserial=document.querySelector('[id="identity_hserial"]');
var confirmation_code=document.querySelector('[id="confirmation_code"]');
var rbtn = document.getElementById('retrive_button'); 
var rbtnspin = document.getElementById('rbuttonSpinner'); 
var rbtntxt = document.getElementById('rbuttonText');  
var acr_btn= document.querySelector('[id="accordion_btn"]');
var acr_body= document.querySelector('[id="collapseOne"]');
var ipg=document.getElementById('ip').value;
urlget = url+'?dealer_hcode='+dealer_hcode.value+'&confirmation_hcode='+confirmation_hcode.value+'&national_hcode='+national_hcode.value+'&identity_hserial='+identity_hserial.value+'&ip='+ipg;
fetch(urlget, {
    method: 'GET',
    mode: 'cors', 
    cache: 'no-cache',
    redirect: 'follow'
  }).then((r) => {
         if ((r.status == 200)) {
          return r.json();
         }
         return Promise.reject(r);
         }).then((result) => {
          if (result.success){
                acr_btn.classList.add("collapsed");
                acr_body.classList.remove("show");
            window.scrollTo(0, 0);
            //intalert(result.message,'success');
            document.getElementById("myForm_retrive").reset();
            rbtn.disabled=false;
            rbtntxt.textContent = "بازیابی اطلاعات";
            rbtnspin.classList.add('d-none');
            fillform(result.data);
            }
          else {
            window.scrollTo(0, 0);
            intalertret(result.message,'danger');
         
            rbtn.disabled=false;
            rbtntxt.textContent = "بازیابی اطلاعات";
            rbtnspin.classList.add('d-none');

          }
            



         }).catch((error) => {
           window.scrollTo(0, 0);
           console.log(error);
            rbtn.disabled=false;
            rbtntxt.textContent = "بازیابی اطلاعات";
            rbtnspin.classList.add('d-none');
            intalertret("ارتباط با مشکل مواجه شد مجددا سعی نمایید.",'danger')})


}


function waitingFor(p,c,p1,c1,count, delay, tries) {
    var el = document.querySelector('select[name='+p+']'), // match case
        count_local = count || 0,    // initial count value, or... ok only 0 makes sense here
        delay_local = delay || 200,  // initial delay value, or from function call
        tries_local = tries || 10;   // initial tries value, or from function call

    if (el && el.length) {
      ch (p,c,p1,c1);
    } else if (count_local < tries_local) {

        setTimeout(function () {
            waitingFor(p,c,p1,c1,count_local + 1, delay_local, tries_local)
        }, delay_local);

    } else {

    }
}

function ch (p,c,p1,c1)
{
  var eChange = new Event('change', {'bubbles':true});
  var elCountry = document.querySelector('select[name='+p+']');
  var elState = document.querySelector('select[name='+c+']');
  // Select country
  elCountry.value = p1;
  // Trigger country 'change' event
  elCountry.dispatchEvent(eChange);
  // Select state when it's populated with states
  var timer = setInterval(function() {
    if (elState.options.length>1) {
      elState.value = c1;
      // Trigger state 'change' event
      elState.dispatchEvent(eChange);
      // Stop the interval
      clearInterval(timer);
    }
  }, 100);
}


function fillform(r)
{
  console.log(r);
  var data0=[];
	  for (var i = 0; i < Object.keys(r).length; i++) {
	   data0[i]=Object.keys(r)[i];

	   
	   }
  var sel = document.getElementById('myForm').querySelectorAll('input[name],select[name]');
  for (var j=0;j<sel.length;j++)
  {
    if(data0[j]=='gender') continue;
  for (var i=0;i<sel.length;i++)
  {
    

    
    if(sel[i].name==data0[j])
    {
     sel[i].value=r[sel[i].name];

    }
  }
  }
      waitingFor("issuance_place_province","issuance_place_city",r.issuance_place_province,r.issuance_place_city,0, 100, 200);
      waitingFor("birth_place_province","birth_place_city",r.birth_place_province,r.birth_place_city,0, 100, 200);
      waitingFor("address_province","address_city",r.address_province,r.address_city,0, 100, 200);
      waitingFor("ostan","shahr",r.ostan,r.shahr,0, 100, 200);
      waitingFor("shahr","namayandegi",r.shahr,r.namayandegi,0, 100, 200);
      waitingFor("car","car-option",r.carobj.car,r.carobj.inc,0, 100, 200);
     
      (r.gender=="true")?document.getElementById('gender_male').checked=true:document.getElementById('gender_female').checked=true;
      document.querySelectorAll('[value='+JSON.stringify(r.colorobj.color)+']')[0].checked=true;

      (r.colorobj.colorb=="") ? (document.getElementById('colorb-zero').checked=true):(document.querySelectorAll('[value='+JSON.stringify(r.colorobj.colorb)+']')[1].checked=true);

      if (r.carobj.car1!='')
      {
      if (document.getElementById('flexSwitchCheckDefault').checked==false) document.getElementById('flexSwitchCheckDefault').click();  
      document.querySelectorAll('[value='+JSON.stringify(r.colorobj.colors1)+']')[2].checked=true;
      (r.colorobj.colors1b1=="") ? (document.getElementById('colors1b1-zero').checked=true):document.querySelectorAll('[value='+JSON.stringify(r.colorobj.colors1b1)+']')[3].checked=true;
      }

       waitingFor("car1","car1-option",r.carobj.car1,r.carobj.inc1,0, 100, 200);

}
      




function intalertret(message,type)
{
  var retrive_alert=document.querySelector('[id="retrive_alert"]');
  retrive_alert.classList.remove('d-none');
  retrive_alert.innerText=message;
}








//---end get






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
//var sel = document.querySelectorAll('input[name],select[name]');
var sel = document.getElementById('myForm').querySelectorAll('input[name],select[name]')
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
if (data.flexCheckDefault=='0') {
  data['colors1']='';
  data['colors1b1']='';
  data.car1='';
  data['car1-option']='';
  //data.car1_name='';
  //data.car1_option_row='';
};


 data['ip']=document.getElementById('ip').value;
 data['full']=collect_Text;

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
          if (result.success){
            window.scrollTo(0, 0);
            intalert(result.message,'success');
            var FORM = document.getElementById('myForm');
            document.getElementById("myForm").reset();
              var element=document.getElementById("send");
	            element.parentNode.removeChild(element);
              var element=document.getElementById("back");
	            element.parentNode.removeChild(element);
              //saveStaticDataToFile(result.message);
            }
          else {
            window.scrollTo(0, 0);
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
  var FORM = document.getElementById('myForm');
  if (FORM.checkValidity() === true) {
      collect_Text=[];
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
              //saveStaticDataToFile();




}
else 
{
collectvalue();
}
}

function intalert(message,type) {
var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var element=document.querySelector('[id="last_alert"]');
 if (!!element) {element.parentNode.removeChild(element)};
  var wrapper = document.createElement('div');

 // wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
if (type=='succsss')
{
 wrapper.innerHTML = '<div class="alert alert-'+ type + ' d-flex align-items-center" id="last_alert" role="alert"> <svg class="bi flex-shrink-0 me-2" width="100" height="100" ole="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>  <div>  ' + message + '   </div>'

}
else
{
   wrapper.innerHTML = '<div class="alert alert-'+ type + ' d-flex align-items-center" id="last_alert" role="alert"> <svg class="bi flex-shrink-0 me-2" width="100" height="100" ole="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>  <div>  ' + message + '  </div>'
}
  alertPlaceholder.append(wrapper)
}



function saveStaticDataToFile(a) {
collect_Text[collect_Text.length]=a+'\n';
              var blob = new Blob(collect_Text,
                { type: "text/plain;charset=utf-8" });
                console.log(blob);
            saveAs(blob, "Data.txt");
}



function adddata()
{
var data={};
//var sel = document.querySelectorAll('input[name],select[name]');
var sel = document.getElementById('myForm').querySelectorAll('input[name],select[name]');
for (var i = 0; i < sel.length; i++) {


if (sel[i].tagName=='SELECT')

{

data[sel[i].name]=sel[i].selectedOptions[0].label;


}
//
else if ((sel[i].type=='radio')&&(sel[i].checked))
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

/*
else if ((sel[i].type!='radio')||((sel[i].type=='radio')&&(sel[i].checked)))
{
data[sel[i].name]=sel[i].value;
}
*/
}
data['exp']='14'+data.ye+'/'+data.mo;
data['issu_date']='13'+data.issuance_date_yy+'/'+data.issuance_date_mm+'/'+data.issuance_date_dd;
data['birth_date']='13'+data.birth_date_yy+'/'+data.birth_date_mm+'/'+data.birth_date_dd;



var label={};
var sell=document.querySelectorAll('[for]');
for (var i = 0; i < sell.length; i++) {
if (sell[i].classList[0]!='form-check-label')
{
label[sell[i].htmlFor]=sell[i].innerText;
}
}
label.exp='تاریخ انقضا';
label.issu_date='تاریخ صدور شناسنامه';
label.birth_date='تاریخ تولد';
label.car='ماشین';
label.car1='ماشین دوم';
label.sheba='شماره شبا';
label['car-option']='آپشن ماشین';
label['car_option_row']='ردیف آپش ماشین';
label['car1-option']='آپشن ماشین دوم';
label['car1_option_row']='ردیف ماشین دوم';
label['color']='رنگ اصلی';
label['colorb']='رنگ انتخابی ماشین';
label['colors1']='رنگ اصلی ماشین دوم';
label['colors1b1']='رنگ انتخابی ماشین دوم';
label['gender']='جنسیت';
label['flexCheckDefault']='مایل به انتخاب ماشین یا آپشن دوم می باشم';

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

var tmp=moveArrayItemToNewIndex (data0,reindex('birth_date',data0),reindex('identity_serial',data0)+1);
var tmp1=moveArrayItemToNewIndex (tmp,reindex('issu_date',tmp),reindex('birth_date_yy',tmp)+1);
data0=tmp1;

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

if (((data0[i]=='car1'))&&(data.flexCheckDefault=='0'))
{
continue;
}

if ((data0[i]=='car_name')||(data0[i]=='car_option_row')||(data0[i]=='car-option')||(data0[i]=='colors1')||(data0[i]=='color')||(data0[i]=='colorb')||(data0[i]=='colors1b1')||(data0[i]=='car1_name')||(data0[i]=='car1_option_row')||(data0[i]=='car1-option'))
{
  continue;
}
if ((data0[i]=='confirmation_code')&&(data.confirmation_code==''))
{
  continue;
}

if (data0[i]=='car')
{
  tmpc= (data.colorb!="")? ('یا '+data.colorb): '';
  createlbl(label[data0[i]],data[data0[i]]+' '+data['car-option']+' رنگ '+data.color+' '+tmpc )



  continue;
}

if (data0[i]=='car1')
{
  tmpc= (data.colors1b1!="")? ('یا '+data.colors1b1): '';
  createlbl(label[data0[i]],data[data0[i]]+' '+data['car1-option']+' رنگ '+data.colors1+' '+tmpc )



  continue;
}


if ((data0[i]=='gender'))
{
if (data[data0[i]]=="true")
{
createlbl(label[data0[i]],'مرد')
}
else
{
createlbl(label[data0[i]],'زن')
}
}
else if ((data0[i]=='flexCheckDefault')) 
{
if (data[data0[i]]=='0')
{
createlbl(label[data0[i]],'خیر')
}else{
createlbl(label[data0[i]],'بله')
}

}else if ((data0[i]=='colorb')||(data0[i]=='colors1b1'))
{
if (data[data0[i]]=="false")
{
createlbl(label[data0[i]],'فقط رنگ انتخابی اول')
}else
{
  createlbl(label[data0[i]],data[data0[i]])
}



}else if (data0[i]=='credit-card')
{

createlbl(/*label[data0[i]]*/'credit-card',data[data0[i]].replaceAll(' ',' '))
}
else if (data0[i]=='sheba')
{
createlbl(label[data0[i]],'IR'+data[data0[i]])
}
/*else if ((data0[i]=='issuance_date_yy')||(data0[i]=='birth_date_yy'))

{
createlbl(label[data0[i]],'13'+data[data0[i]])
}
*/
else if ((data0[i]=='issuance_date_yy')||(data0[i]=='issuance_date_mm')||(data0[i]=='issuance_date_dd')||(data0[i]=='mo')||(data0[i]=='ye')||(data0[i]=='birth_date_yy')||(data0[i]=='birth_date_mm')||(data0[i]=='birth_date_dd'))
{

}
else if ((data0[i]=='city_zone')&&(data[data0[i]]==""))
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
 collect_Text[collect_Text.length]=sel+': '+val+'\n';

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

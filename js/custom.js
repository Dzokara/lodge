window.onload = function(){
    showSlides();
    let workHours=[10,11,12,13,14,15,16,17,18];
    openClosed(workHours);
    getYear();
    var hrefArray= ["#header_section","#about_section","#price_section","#contact_section","author.html"];
    var textArray=["Home","About","Jewellery","Contact Us","Author"]
    navbarContent(hrefArray,textArray);
    var itemName=["Bracelet","Ring","Earings"];
    itemsImages(itemName);
    var showMoreButton=document.getElementById("price-button");
    showMoreButton.addEventListener("click",function(){
      let box=document.querySelectorAll("#price_section .price_container .box");
      if(box[3].classList.contains("hide-row")){
      for (let index = 3; index < box.length; index++) 
        box[index].classList.remove("hide-row");
        showMoreButton.value="See Less";
        showButton=true;
      }
      else
      for (let index = 3; index < box.length; index++) {
        box[index].classList.add("hide-row");
        showMoreButton.value="See More";
        showButton=false;
      }
    });
    // var readMoreButton=document.getElementById("readMoreButton");
    // readMoreButton.addEventListener("click",function(){
    //   if (document.getElementById("hidden-text").classList.contains("hide-row")) {
    //     document.getElementById("hidden-text").classList.remove("hide-row");
    //     readMoreButton.value="Read Less";
    //   }
    //   else
    //   {
    //     document.getElementById("hidden-text").classList.add("hide-row");
    //     readMoreButton.value="Read More";
    //   }
    // });
    var nextArrow=document.getElementsByClassName("next");
    var arrowSlideIndex=0;
    nextArrow[0].addEventListener("click",function(){
      let clientBlock=document.getElementsByClassName("client_container");
      if (arrowSlideIndex==2) {
        clientBlock[arrowSlideIndex].classList.add("hide-row");
        arrowSlideIndex=0;
        clientBlock[arrowSlideIndex].classList.remove("hide-row");
      }
      else{
        clientBlock[arrowSlideIndex++].classList.add("hide-row");
        clientBlock[arrowSlideIndex].classList.remove("hide-row");
      }
    });
    var prevArrow=document.getElementsByClassName("prev");
    prevArrow[0].addEventListener("click",function(){
      let clientBlock=document.getElementsByClassName("client_container");
      if (arrowSlideIndex==0) {
        clientBlock[arrowSlideIndex].classList.add("hide-row");
        arrowSlideIndex=2;
        clientBlock[arrowSlideIndex].classList.remove("hide-row");
      }
      else{
        clientBlock[arrowSlideIndex--].classList.add("hide-row");
        clientBlock[arrowSlideIndex].classList.remove("hide-row");
      }
    });
    createForm();
    objName=document.querySelector("#fullName");
    objEmail=document.querySelector("#email");
    objPhone=document.querySelector("#phone");
    objTextArea=document.querySelector("#message-text");
    objMessageSubject=document.querySelector("#message-subject");
    objName.addEventListener("blur",function(){
      reCheck(reName,this);
    });
    objEmail.addEventListener("blur",function(){
      reCheck(reEmail,this);
    });
    objPhone.addEventListener("blur",function(){
      reCheck(rePhone,this);
    });
    objTextArea.addEventListener("blur",function(){
      messageSubjectCheck(objMessageSubject,this);
    });
    objMessageSubject.addEventListener("change",function(){
      messageSubjectCheck(this,objTextArea);
    });
    var formButton=document.getElementById("form-button");
    formButton.addEventListener("click",formValidation);
    objEmail2=document.querySelector("#email2");
    secondEmailButton=document.querySelector("#secondEmailButton");
    objEmail2.addEventListener("blur",function(){
      reCheck(reEmail,this);
    });
    secondEmailButton.addEventListener("click",function(){
      reCheck(reEmail,objEmail2);
      if(reEmail.test(objEmail2.value)){
        document.getElementById("form2").reset();
      }
    });

  }

// ----------------------functions----------------------
function openClosed(workHours){
  let time=new Date();
  let dayTmp=time.getDay();
  let hourTmp=time.getHours();
  let openHours=document.getElementById("open-hours");
  if(!(dayTmp>=1 && dayTmp<=5 && workHours.includes(hourTmp)))
  {
    openHours.classList.add("open-hours-closed");
  }
}
var slideIndex = 0;
function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slide-row");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide-row");  
  }
  if (slideIndex>=slides.length)
  slideIndex=0;
  slideIndex++;
  slides[slideIndex-1].classList.remove("hide-row");  
  setTimeout(showSlides, 3000); 
}


function navbarContent(hrefArray,textArray) {
    let navbarUl=document.getElementById("navbar-ul");
    for (let index = 0; index < hrefArray.length; index++) {
        navbarUl.innerHTML+=`<li class="nav-item">
                            <a class="nav-link" href="${hrefArray[index]}">${textArray[index]}</a>
                            </li>`
    }
}
// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

function itemsImages(itemName){
  let itemsDiv=document.querySelectorAll("#item_section .item_container");
  hrefNumber=1;
  for (let index = 0; index < itemName.length; index++) {
    itemsDiv[0].innerHTML+=`<div class="box">
                          <div class="price">
                            <h6>
                              Best PRICE
                            </h6>
                          </div>
                          <div class="img-box">
                            <img src="images/i-${hrefNumber++}.png" alt="Image of a ${itemName[index]}">
                          </div>
                          <div class="name">
                            <h5>
                            ${itemName[index]}
                            </h5>
                          </div>
                        </div>`
    
  }
}



function buyNowSection(jewelleryType,prices){
  let pricesDiv=document.querySelectorAll("#price_section .price_container");
  for (let index = 0; index < 9; index++) {
    if(index>2){
      pricesDiv[0].innerHTML+=`<div class="box hide-row">
      <div class="name">
        <h6>
        ${jewelleryType[index]}
        </h6>
      </div>
      <div class="img-box">
        <img class="img-fluid colorboxImage" src="images/i-${index+1}.png" alt="${jewelleryType[index]}">
      </div>
      <div class="detail-box">
        <h5>
          $<span>${prices[index]}</span>
        </h5>
      </div>
    </div>`;
    }
    else
    pricesDiv[0].innerHTML+=`<div class="box">
    <div class="name">
      <h6>
      ${jewelleryType[index]}
      </h6>
    </div>
    <div class="img-box">
      <img class="img-fluid colorboxImage" src="images/i-${index+1}.png" alt="${jewelleryType[index]}">
    </div>
    <div class="detail-box">
      <h5>
        $<span>${prices[index]}</span>
      </h5>
    </div>
  </div>`;
    
  }
}
function createForm() {
  var ddlValues = ["message subject", "report a bug", "technical support", "questions about ordering","other..."];
               
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", "submit.php");
  form.id="form1";
  var fullName = document.createElement("input");
  fullName.setAttribute("type", "text");
  fullName.setAttribute("id", "fullName");
  fullName.setAttribute("placeholder", "Full Name : John Doe");
  var nameSpan=document.createElement("span");
  nameSpan.setAttribute("class","hide-row");
  nameSpan.innerHTML="Fullname contains letters and both name and surname start with an uppercase. Example : John Doe";
  var email = document.createElement("input");
  email.setAttribute("type", "text");
  email.setAttribute("id", "email");
  email.setAttribute("placeholder", "E-Mail : john@gmail.com");
  var emailSpan=document.createElement("span");
  emailSpan.setAttribute("class","hide-row");
  emailSpan.innerHTML="Email needs to contain '@' Example : john.doe@gmail.com";     
  var phone=document.createElement("input");
  phone.setAttribute("type","text");
  phone.setAttribute("id","phone");
  phone.setAttribute("placeholder","Phone : 0621234567");
  var phoneSpan=document.createElement("span");
  phoneSpan.setAttribute("class","hide-row");
  phoneSpan.innerHTML="Phone number must be in the next format : 0621234567";   
  var select = document.createElement("select");
  select.id = "message-subject";
  select.setAttribute("class","form-select");
  select.setAttribute("class","mb-3");
  for (const ddlValue of ddlValues)
    {
        var option = document.createElement("option");
        option.value = ddlValue;
        option.text = ddlValue.charAt(0).toUpperCase() + ddlValue.slice(1);
        select.appendChild(option);
    }
   var messageText=document.createElement("textarea");
   messageText.cols=61;
   messageText.rows=4;
   messageText.setAttribute("class","message-box");
   messageText.setAttribute("id","message-text");
   messageText.setAttribute("placeholder","Enter text here...(optional)");
   var messageSpan=document.createElement("span");
   messageSpan.setAttribute("class","hide-row");
   messageSpan.innerHTML="Messages are optional, if you do not want to send a message leave the subject at 'Message subject' and the textfield blank.";   
   messageText.form="form1";
   var checkBoxRow = document.createElement("div");
   checkBoxRow.setAttribute("class","row");
   checkBoxRow.setAttribute("id","checkbox-row");
   var checkBox = document.createElement("input");
   checkBox.setAttribute("type","checkbox");
   checkBox.setAttribute("id","agreement");
   var labelCheckbox = document.createElement("label");
   labelCheckbox.setAttribute("for","agreement");
   labelCheckbox.appendChild(document.createTextNode('By using this form you agree with the storage handling of your data by this website.'));                                              
   var formButton = document.createElement("input");
   formButton.setAttribute("type", "button");
   formButton.setAttribute("value", "Submit");
   formButton.setAttribute("id","form-button");
   var formCompleteSpan=document.createElement("h4");
   formCompleteSpan.setAttribute("id","success");
   formCompleteSpan.setAttribute("class","hide-row");
   formCompleteSpan.innerHTML="You have filled in the form correctly!";   
   checkBoxRow.appendChild(checkBox);
   checkBoxRow.appendChild(labelCheckbox);
   form.appendChild(fullName);  
   form.appendChild(nameSpan);
   form.appendChild(email);
   form.appendChild(emailSpan);
   form.appendChild(phone);
   form.appendChild(phoneSpan);
   form.appendChild(select);
   form.appendChild(messageText);
   form.appendChild(messageSpan);
   form.appendChild(checkBoxRow);
   form.appendChild(formButton);
   form.appendChild(formCompleteSpan);
   document.getElementById("form-container").appendChild(form);
    }




  var reName,reEmail,rePhone;
  reName=/^[A-ZŠĐŽČĆ][a-zšđčćž]{2,14}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,14})+$/;
  reEmail=/^[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}$/;
  rePhone=/^06\d{7,8}$/;
function formValidation(){
  let objName, objEmail, objPhone, objMessageSubject, objTextArea, objAgreementCheckBox,objForm,formCompleteSpan;
  
  objName=document.querySelector("#fullName");
  objEmail=document.querySelector("#email");
  objPhone=document.querySelector("#phone");
  objMessageSubject=document.querySelector("#message-subject");
  objTextArea=document.querySelector("#message-text");
  objAgreementCheckBox=document.querySelector("#agreement");
  objForm=document.querySelector("#form1");
  formCompleteSpan=document.querySelector("#success");
  reCheck(reName,objName);
  reCheck(reEmail,objEmail);
  reCheck(rePhone,objPhone);
  agreementCheck(objAgreementCheckBox);
  messageSubjectCheck(objMessageSubject,objTextArea);
  if(nameValid && agreementValid && messageValid){
    objForm.reset();
    formCompleteSpan.classList.remove("hide-row");
  }
  else{
    formCompleteSpan.classList.add("hide-row");
  }
}

var nameValid=false;
function reCheck(re,obj){
  if(!re.test(obj.value)){
    obj.nextElementSibling.classList.remove("hide-row");
    obj.classList.add("border");
    obj.classList.add("border-danger");
    nameValid=false;
}
  else{
    obj.nextElementSibling.classList.add("hide-row");
    obj.classList.remove("border-danger");
    nameValid=true;
  }
}
var agreementValid=false;
function agreementCheck(obj){
  if(obj.checked){
    obj.nextElementSibling.classList.remove("label-red");
    obj.classList.add("border");
    obj.classList.add("border-danger");
    agreementValid=true;
  }
  else{
    obj.nextElementSibling.classList.add("label-red");
    obj.classList.remove("border-danger");
    agreementValid=false;
  }
}
var messageValid=false;
function messageSubjectCheck(obj,objchild){
  if((obj.selectedIndex && objchild.value.length==0)||(!obj.selectedIndex && objchild.value.length>0)){
    objchild.nextElementSibling.classList.remove("hide-row");
    obj.classList.add("border");
    obj.classList.add("border-danger");
    objchild.classList.add("border");
    objchild.classList.add("border-danger");
    messageValid=false;
  }
  else{
    objchild.nextElementSibling.classList.add("hide-row");
    obj.classList.remove("border");
    obj.classList.remove("border-danger");
    objchild.classList.remove("border");
    objchild.classList.remove("border-danger");
    messageValid=true;
  }
}



//--------------------jquery----------------------

var jewelleryType=["Bracelet","Ring","Earrings","Ring","Ring","Bracelet","Earrings","Earrings","Earrings"];
var prices=["800.00","1500.00","500.00","3000.00","1200.00","1000.00","4000.00","5000.00","8000.00"];
$(document).ready(function (){
  buyNowSection(jewelleryType,prices);
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {        
        $('#return-to-top').fadeIn(300);    
    } else {
        $('#return-to-top').fadeOut(300);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});
$(".shop-button").click(function() {
  $('html, body').animate({
      scrollTop: $("#price_section").offset().top
  }, 1000);
});
$("#button-wedding").click(function() {
  $('html, body').animate({
      scrollTop: $("#price_section").offset().top
  }, 1000);
});
$(".container .price_container .box").click(function(){
    console.log("1");
   $('.colorboxImage').each(function() {
    $(this).colorbox({
      rel: 'images',
      transition: "fade",
      opacity: 0.5,
      rel: 'group1',
      href: $(this).attr('src')
    });
  });
});
$("#readMoreButton").click(function(){
  $("#hidden-text").slideToggle(500);
  if($(this).val()=="Read More..."){
    $(this).val("Read Less");
  }
  else{
    $(this).val("Read More...");
  }
   
});
});

    




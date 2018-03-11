 var standart = document.getElementById("standart");
 var advanced = document.getElementById("advanced");
 var business = document.getElementById("business");
 var phone = document.getElementById("phone__img");
 var buttons = document.getElementsByClassName("tariffs-plan__button");

 standart.onclick = function () {
       standart.classList.add("tariffs-plan_active");
       buttons[0].classList.add("tariffs-plan__button_active");
       advanced.classList.remove("tariffs-plan_active");
       buttons[1].classList.remove("tariffs-plan__button_active");
       business.classList.remove("tariffs-plan_active");
       buttons[2].classList.remove("tariffs-plan__button_active");
  };
  advanced.onclick = function () {
       advanced.classList.add("tariffs-plan_active");
       buttons[1].classList.add("tariffs-plan__button_active");
       standart.classList.remove("tariffs-plan_active");
       buttons[0].classList.remove("tariffs-plan__button_active");
       business.classList.remove("tariffs-plan_active");
       buttons[2].classList.remove("tariffs-plan__button_active");
  };
  business.onclick = function () {
      business.classList.add("tariffs-plan_active");
      buttons[2].classList.add("tariffs-plan__button_active");
      standart.classList.remove("tariffs-plan_active");
      buttons[0].classList.remove("tariffs-plan__button_active");
      advanced.classList.remove("tariffs-plan_active");
      buttons[1].classList.remove("tariffs-plan__button_active");
  };

  phone.onclick = function () {
    alert("Phone: 1-800-555-1234\nEmail: support@website.com");
  };
 
 var trainers = document.getElementsByClassName("trainer"); 
 var trainersActive = document.getElementsByClassName("trainer-active");
 
 trainers[0].onclick = function(){ 
   trainersActive[0].style.display = "block";   
   trainers[0].style.display = "none";
   trainers[1].style.display = "block";
   trainers[2].style.display = "block";
   trainers[3].style.display = "block";
   trainers[4].style.display = "block";
   trainers[5].style.display = "block";
   trainers[6].style.display = "block";
   trainers[7].style.display = "block";
   trainersActive[1].style.display = "none";
   trainersActive[2].style.display = "none";
   trainersActive[3].style.display = "none";
   trainersActive[4].style.display = "none";
   trainersActive[5].style.display = "none";
   trainersActive[6].style.display = "none";
   trainersActive[7].style.display = "none";     
 };
 trainersActive[0].onclick = function(){
   trainersActive[0].style.display = "none";
   trainers[0].style.display = "block";
 };
 trainers[1].onclick = function(){   
   trainers[1].style.display = "none";
   trainers[0].style.display = "block";
   trainers[2].style.display = "block";
   trainers[3].style.display = "block";
   trainers[4].style.display = "block";
   trainers[5].style.display = "block";
   trainers[6].style.display = "block";
   trainers[7].style.display = "block";
   trainersActive[1].style.display = "block";
   trainersActive[0].style.display = "none";
   trainersActive[2].style.display = "none";
   trainersActive[3].style.display = "none";
   trainersActive[4].style.display = "none";
   trainersActive[5].style.display = "none";
   trainersActive[6].style.display = "none";
   trainersActive[7].style.display = "none";
 };
 trainersActive[1].onclick = function(){
   trainersActive[1].style.display = "none";
   trainers[1].style.display = "block";
 };
 trainers[2].onclick = function(){   
   trainers[2].style.display = "none";
   trainers[0].style.display = "block";
   trainers[1].style.display = "block";
   trainers[3].style.display = "block";
   trainers[4].style.display = "block";
   trainers[5].style.display = "block";
   trainers[6].style.display = "block";
   trainers[7].style.display = "block";
   trainersActive[2].style.display = "block";
   trainersActive[0].style.display = "none";
   trainersActive[1].style.display = "none";
   trainersActive[3].style.display = "none";
   trainersActive[4].style.display = "none";
   trainersActive[5].style.display = "none";
   trainersActive[6].style.display = "none";
   trainersActive[7].style.display = "none";
 };
 trainersActive[2].onclick = function(){
   trainersActive[2].style.display = "none";
   trainers[2].style.display = "block";
 };
 trainers[3].onclick = function(){   
   trainers[3].style.display = "none";
   trainers[0].style.display = "block";
   trainers[1].style.display = "block";
   trainers[2].style.display = "block";
   trainers[4].style.display = "block";
   trainers[5].style.display = "block";
   trainers[6].style.display = "block";
   trainers[7].style.display = "block";
   trainersActive[3].style.display = "block";
   trainersActive[0].style.display = "none";
   trainersActive[1].style.display = "none";
   trainersActive[2].style.display = "none";
   trainersActive[4].style.display = "none";
   trainersActive[5].style.display = "none";
   trainersActive[6].style.display = "none";
   trainersActive[7].style.display = "none";
 };
 trainersActive[3].onclick = function(){
   trainersActive[3].style.display = "none";
   trainers[3].style.display = "block";
 };
 trainers[4].onclick = function(){   
   trainers[4].style.display = "none";
   trainers[0].style.display = "block";
   trainers[1].style.display = "block";
   trainers[2].style.display = "block";
   trainers[3].style.display = "block";
   trainers[5].style.display = "block";
   trainers[6].style.display = "block";
   trainers[7].style.display = "block";
   trainersActive[4].style.display = "block";
   trainersActive[0].style.display = "none";
   trainersActive[1].style.display = "none";
   trainersActive[2].style.display = "none";
   trainersActive[3].style.display = "none";
   trainersActive[5].style.display = "none";
   trainersActive[6].style.display = "none";
   trainersActive[7].style.display = "none";
 };
 trainersActive[4].onclick = function(){
   trainersActive[4].style.display = "none";
   trainers[4].style.display = "block";
 };
 trainers[5].onclick = function(){   
   trainers[5].style.display = "none";
   trainers[0].style.display = "block";
   trainers[1].style.display = "block";
   trainers[2].style.display = "block";
   trainers[3].style.display = "block";
   trainers[4].style.display = "block";
   trainers[6].style.display = "block";
   trainers[7].style.display = "block";
   trainersActive[5].style.display = "block";
   trainersActive[0].style.display = "none";
   trainersActive[1].style.display = "none";
   trainersActive[2].style.display = "none";
   trainersActive[3].style.display = "none";
   trainersActive[4].style.display = "none";
   trainersActive[6].style.display = "none";
   trainersActive[7].style.display = "none";
 };
 trainersActive[5].onclick = function(){
   trainersActive[5].style.display = "none";
   trainers[5].style.display = "block";
 };
 trainers[6].onclick = function(){   
   trainers[6].style.display = "none";
   trainers[0].style.display = "block";
   trainers[1].style.display = "block";
   trainers[2].style.display = "block";
   trainers[3].style.display = "block";
   trainers[4].style.display = "block";
   trainers[5].style.display = "block";
   trainers[7].style.display = "block";
   trainersActive[6].style.display = "block";
   trainersActive[0].style.display = "none";
   trainersActive[1].style.display = "none";
   trainersActive[2].style.display = "none";
   trainersActive[3].style.display = "none";
   trainersActive[4].style.display = "none";
   trainersActive[5].style.display = "none";
   trainersActive[7].style.display = "none";
 };
 trainersActive[6].onclick = function(){
   trainersActive[6].style.display = "none";
   trainers[6].style.display = "block";
 };
 trainers[7].onclick = function(){   
   trainers[7].style.display = "none";
   trainers[0].style.display = "block";
   trainers[1].style.display = "block";
   trainers[2].style.display = "block";
   trainers[3].style.display = "block";
   trainers[4].style.display = "block";
   trainers[5].style.display = "block";
   trainers[6].style.display = "block";
   trainersActive[7].style.display = "block";
   trainersActive[0].style.display = "none";
   trainersActive[1].style.display = "none";
   trainersActive[2].style.display = "none";
   trainersActive[3].style.display = "none";
   trainersActive[4].style.display = "none";
   trainersActive[5].style.display = "none";
   trainersActive[6].style.display = "none";
 };
 trainersActive[7].onclick = function(){
   trainersActive[7].style.display = "none";
   trainers[7].style.display = "block";
 };

  var gallery = document.getElementById("gallery");
  gallery.onmouseover = function(event) {
      var target = event.target;
      if (target.tagName =='IMG') {
          target.src = "images/search.png";
      }
  };
 gallery.onmouseout = function(event) {
     var target = event.target;
     if (target.tagName =='IMG') {
         target.src = "images/" + target.alt + ".png" ;
     }
 };
let icon=document.querySelector('.icon');
let ul=document.querySelector('ul');
icon.addEventListener("click",()=>{
  ul.classList.toggle("showdata");
  
  if(ul.className=="showdata"){
    document.getElementById('bar').className="fa-solid fa-xmark";
  }else{
    document.getElementById('bar').className="fa-solid fa-bars";
  }
})
//navbar
let shops=document.getElementById("shops");
let reviews=document.getElementById("reviews");
let contacts=document.getElementById("contacts");
let blogs=document.getElementById("blogs");

shops.addEventListener("click",()=>{
  shops.style.color="rgb(20, 101, 101)";
  reviews.style.color="white";
  contacts.style.color="white";
  blogs.style.color="white";
})
reviews.addEventListener("click",()=>{
  reviews.style.color="rgb(20, 101, 101)";
  shops.style.color="white";
  contacts.style.color="white";
  blogs.style.color="white";
})
contacts.addEventListener("click",()=>{
  contacts.style.color="rgb(20, 101, 101)";
  reviews.style.color="white";
  shops.style.color="white";
  blogs.style.color="white";
})
blogs.addEventListener("click",()=>{
  blogs.style.color="rgb(20, 101, 101)";
  reviews.style.color="white";
  contacts.style.color="white";
  shops.style.color="white";
})


// card details

let crd=document.querySelectorAll('.crd');
let itempage=document.querySelector('.itempage');
 let container=document.querySelector('.container');
let pic=document.getElementById('pic');
let buybtn=document.getElementById('buybtn');
let cross=document.querySelector('.cross');
crd.forEach(function(curvalue){
  curvalue.addEventListener("click", function(){
    itempage.style.display="flex";
    container.style.display="none";
    let imgsrc=curvalue.firstElementChild.src;
  
    pic.src=imgsrc;

    buybtn.addEventListener("click",function(){
    document.querySelector(".buypage").style.display="block";
      document.querySelector('.buytext').innerHTML=`<h3>Enter Your Details:</h3>
      <input type="text" id="name" placeholder="Enter Your Name"> <br><br>
      <input type="text" id="name" placeholder="Enter Your Mobile Number"> <br><br>
      <input type="text" id="name" placeholder="Enter Your Address"> <br><br>
      <input type="text" id="name" placeholder="Enter Your postalcode">
      <h3>Payment Option:</h3>
      <select name="" id="">
        <option value="Google-pay">Google-pay</option>
        <option value="Phone-pay">Phone-pay</option>
        <option value="Card-pay">Card-pay</option>
        <option value="Cash-on-Delivery">Cash-on-Delivery</option>
      </select> <br><br>
      <button>Submit</button>`

      cross.addEventListener("click",function(){
        document.querySelector(".buypage").style.display="none";
      })
    })
  })
})
let add=1;
    document.getElementById('in').value=add;
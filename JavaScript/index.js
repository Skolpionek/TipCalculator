const BUTTONS = document.querySelectorAll('.TipButton')
const MONEYINPUT = document.querySelector('#MoneyInput')
const PEOPLEINPUT = document.querySelector('#PeopleInput')
const CUSTOMVALUE = document.querySelector('#CustomValue')
const TOTALVALUE = document.querySelector('.TotalValue')
const TIPVALUE = document.querySelector('.TipValue')
const ERROR = document.querySelector("div.error")

BUTTONS.forEach(button => {
   button.addEventListener("click",e=>{
      count(parseFloat(e.target.value))
   })
});
CUSTOMVALUE.addEventListener("input",()=>{
   count(parseFloat(CUSTOMVALUE.value))
})

function count(value){
   PEOPLEINPUT.classList.remove("error")
   ERROR.style.display = "none"
   console.log(value)
   if(PEOPLEINPUT.value != "0" && MONEYINPUT.value != ""){
      let Tip = parseFloat(MONEYINPUT.value) * (value / 100) / parseFloat(PEOPLEINPUT.value)
      TIPVALUE.innerHTML = "$"+Tip.toFixed(2)
      TOTALVALUE.innerHTML = Tip+parseFloat(MONEYINPUT.value)/parseFloat(PEOPLEINPUT.value).toFixed(2)
   }
   if(PEOPLEINPUT.value == "0" || PEOPLEINPUT.value == ""){
      PEOPLEINPUT.classList.add("error")
      ERROR.style.display = "block"
   }
   if(isNaN(value)){
      TIPVALUE.innerHTML = "$0.00"
      TOTALVALUE.innerHTML = "$0.00"
   }
}



let myLeads = [];


const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("del-btn");
const tabBtn = document.getElementById("tab-btn");
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromStorage);
function renderfunct(y){
    let listitems = "";
for (let i = 0; i < y.length; i++ ) {
    listitems += `<li>
    <a href=' ${y[i]}' target='_blank'>${y[i]} 
    </a>
    </li>`
}


ulEl.innerHTML = listitems;}
if(leadsFromStorage) {
    myLeads = leadsFromStorage;
    console.log(myLeads);
    renderfunct(myLeads);
}
deleteBtn.addEventListener("dblclick", function(){
    myLeads = [];
    localStorage.clear()
    renderfunct(myLeads)
    
})
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})



inputbtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = " ";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderfunct(myLeads)
    console.log(localStorage.getItem("myLeads"))
})


/*let buyBl = document.getElementById("buy-bl")
buyBl.innerHTML = "<button onclick='myFunction'>Buy!</button>"
function myFunction() {
    buyBl.innerText += "<p>Thanks for buying</P>";
}

 IUOIIPOPdocument.getElementById("buy-bl").addEventListener("click", myFunction);
function myFunction() {

let x = document.createElement("BUTTON")*/
function myFun(){
    let searchVal = document.getElementById("inp").value.toUpperCase();
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");

    let front = document.querySelector(".main");

    for(let i =0; i<tr.length; i++)
    {
        let td = tr[i].getElementsByTagName("td")[0];
        if(td)
        {
            let text = td.innerText;
            if(text.toLocaleUpperCase().indexOf(searchVal)> -1)
            {
                tr[i].style.display="";
                front.style.display="none";
            }
            else
            {
                tr[i].style.display="none";
            }
        }
    }

    if(searchVal == "")
    {
        front.style.display="flex";
    }
}

function nav()
{
    let nav = document.querySelector(".nav");
    nav.style.display = "block";

    let log = document.querySelector(".login");
    log.style.display = "none";
}

function Login()
{
    let log = document.querySelector(".login");
    log.style.display = "block";

    let nav = document.querySelector(".nav");
    nav.style.display = "none";
}

/*Sidebar */

let slide = document.querySelectorAll(".customer");
let count = 0;

slide.forEach(function(customer, index)
{
    customer.style.left = `${index * 100}%`;
})

function next(){
    count ++;
    if(count == slide.length){
        count=0;
    }
    bar()
}
function pre(){
    count--;
    if(count == -1){
        count = slide.length-1
    }
    bar()
}

function bar()
{
    slide.forEach(function(customer)
    {
        customer.style.transform = `translateX(-${count * 100}%)`;
    })
}

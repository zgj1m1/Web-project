const main = document.getElementById("container");

class month{
    constructor(name,daysTotal,startIndex){
        this.name = name
        this.daysTotal = daysTotal
        this.startIndex = startIndex
    }
   
}

const january = new month("january",31,6)
const february = new month("february",28,2)
const march = new month("march",31,2)
const april = new month("april",30,5)
const may = new month("may",31,0)
const june = new month("june",30,3)



function generate(x,y) {
  let count = 1;
  let start = x;
  let days = y; 
  let generated = false
    
  for(let i = 0;count<=days;i++){
    if(i==0){
        const row = document.createElement("div");
        row.setAttribute("class", "row row-calendar");
        main.appendChild(row);
    }else if(i%7 ==0){
        const br = document.createElement("br")
        const row = document.createElement("div");
        row.setAttribute("class", "row row-calendar");
        main.appendChild(br);
        main.appendChild(row);
    }
    if(i<start){
        const div = document.createElement("div");
        div.setAttribute("class", "col");
        const row = document.getElementsByClassName("row-calendar");
        row[row.length-1].appendChild(div)
    }else if(i >= start){
        const div = document.createElement("div");
        div.setAttribute("class", "col");
        const row = document.getElementsByClassName("row-calendar");
        row[row.length-1].appendChild(div)
        const button = document.createElement("button")
        button.setAttribute("class","date-button")
        button.innerHTML = count
        div.appendChild(button)
        count++
    }
  }
  rregulloZbrastirat()
  
}
function rregulloZbrastirat(){
    let row = main.lastElementChild
    let number = row.childElementCount
    for(i=number;i<7;i++){
        const div = document.createElement("div");
        div.setAttribute("class", "col");
        row.appendChild(div)
    }

}
function clear(){
    let number = main.childElementCount
    for(let i = 0;i<number-1;i++){
        main.lastElementChild.outerHTML = ""
         
    }
}
function changeName(name){
    const title = document.getElementById("main-text")
   title.innerHTML = name

}
function changeColor(id){
    const january = document.getElementById("1")
    const february = document.getElementById("2")
    const march = document.getElementById("3")
    const april = document.getElementById("4")
    const may = document.getElementById("5")
    const june = document.getElementById("6")
    if(id==1){
        january.setAttribute("class","month-name current")
        february.setAttribute("class","month-name")
        march.setAttribute("class","month-name")
        april.setAttribute("class","month-name")
        may.setAttribute("class","month-name")
        june.setAttribute("class","month-name")
    }else if(id==2){
        january.setAttribute("class","month-name")
        february.setAttribute("class","month-name  current")
        march.setAttribute("class","month-name")
        april.setAttribute("class","month-name")
        may.setAttribute("class","month-name")
        june.setAttribute("class","month-name")
    }else if(id==3){
        january.setAttribute("class","month-name")
        february.setAttribute("class","month-name")
        march.setAttribute("class","month-name  current")
        april.setAttribute("class","month-name")
        may.setAttribute("class","month-name")
        june.setAttribute("class","month-name")

    }else if(id==4){
        january.setAttribute("class","month-name")
        february.setAttribute("class","month-name")
        march.setAttribute("class","month-name")
        april.setAttribute("class","month-name current")
        may.setAttribute("class","month-name")
        june.setAttribute("class","month-name")

    }else if(id==5){
        january.setAttribute("class","month-name")
        february.setAttribute("class","month-name")
        march.setAttribute("class","month-name")
        april.setAttribute("class","month-name")
        may.setAttribute("class","month-name current")
        june.setAttribute("class","month-name")

    }else if(id==6){
        january.setAttribute("class","month-name")
        february.setAttribute("class","month-name")
        march.setAttribute("class","month-name")
        april.setAttribute("class","month-name")
        may.setAttribute("class","month-name")
        june.setAttribute("class","month-name current")

    }
}

function combined(x,y,z,name){
    clear()
    generate(x,y) 
    changeColor(z)
    changeName(name)
}
generate(january.startIndex , january.daysTotal);

changeName(january.name)



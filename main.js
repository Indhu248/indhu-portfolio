const dropbtn = document.querySelector(".dropbtn")
const drop_item = document.getElementById("d-i")
const lan_name = document.querySelector('.lan-name')

const web_projects = document.getElementById("web_projects")
const python_projects = document.getElementById("python_projects")
const  java_projects = document.getElementById("java_projects")


drop_item.addEventListener("click",()=>{ 
    var val = drop_item.value
    var i = drop_item.selectedIndex
    lan_name.textContent = val
    if(i === 0){
        web_projects.style.display="flex"
        python_projects.style.display="none"
        java_projects.style.display="none"
    }
    if(i === 1){
        java_projects.style.display="flex"
        python_projects.style.display="none"
        web_projects.style.display="none"
    }
    if(i === 2){
        java_projects.style.display="none"
        python_projects.style.display="flex"
        web_projects.style.display="none"
    }
    if(i === 3){
        java_projects.style.display="none"
        python_projects.style.display="none"
        web_projects.style.display="none"
    }
     console.log(drop_item.value)
})


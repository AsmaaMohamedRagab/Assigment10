var sitename = document.getElementById("sitename")
var siteurl = document.getElementById("siteurl")
var allsite = []
if (localStorage.getItem("allsite") != null) {
    allsite = JSON.parse(localStorage.getItem("allsite"))
    displaydata()
}
function validationurl() {
    var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (regex.test(siteurl.value) == true) {
        document.getElementById("messagealert").classList.replace("d-block", "d-none");
        return true;
    }
    document.getElementById("messagealert").classList.replace("d-none", "d-block");
    return false;
}
function validationname() {
    var regex = /^[a-zA-Z0-9]{3,20}$/;
    if (regex.test(sitename.value) == true) {
        document.getElementById("messagealert").classList.replace("d-block", "d-none");
        return true;
    }
    document.getElementById("messagealert").classList.replace("d-none", "d-block");
    return false;
}
function getdata() {
    if (validationurl() == true && validationname() == true) {
        var site = {
            name: sitename.value,
            url: siteurl.value,
        }
        allsite.push(site)
        localStorage.setItem("allsite", JSON.stringify(allsite))
        console.log(allsite)
        cleardata()
        displaydata()
    }
}
function cleardata() {
    sitename.value = ""
    siteurl.value = ""
}

function displaydata() {
    var cartoona = "";
    for (var i = 0; i < allsite.length; i++) {
        cartoona += `<tr>
        <td>${i + 1}</td>
        <td>${allsite[i].url}</td>
        <td><button class="btn bg-success text-white" onclick=visiturl(${i})><i class="fa-solid fa-eye pe-2"></i>Visite</button></td>
        <td><button class="btn btn-danger" onclick="deleteitem(${i})"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML = cartoona;
}
function deleteitem(index) {
    allsite.splice(index, 1)
    displaydata()
    localStorage.setItem("allsite", JSON.stringify(allsite))
}
function visiturl(index) {
    window.open(allsite[index].url) 
}
function closetab(){
    document.getElementById("messagealert").classList.replace("d-block", "d-none");
}





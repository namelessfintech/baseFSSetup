
function getManager() {
    console.log('Get Manager')
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8080/managers';
    Http.open("GET",url)
    Http.send()

    Http.onreadystatechange = function(){
        updateElement('employeeDetailArea', Http.responseText)
}
}   

function getEmployee() {
    console.log('Get Employee')
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8080/employees';
    Http.open("GET",url)
    Http.send()

    Http.onreadystatechange = () => {
        updateElement('employeeArea', Http.responseText)
    }
} 

/**
 * Update the interface element
 * @param {*} id 
 * @param {*} text 
 */

function updateElement(id, text){
    document.getElementById(id).innerHTML= text; 
}

function log(text){
    var a = String(text)
    a.toUpperCase();
    console.log(a)
}
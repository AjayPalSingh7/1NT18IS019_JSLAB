let heading = document.querySelector("h1");
heading.textContent = "Student information";
heading.style.textAlign = "center";


function student(name,usn,no,cgpa){
    this.name = name;
    this.usn = usn;
    this.no = no;
    this.cgpa = cgpa;
}



let arr = [];


function func(){
    let name = document.getElementById("name").value;
    let usn = document.getElementById("usn").value;
    let no = document.getElementById("number").value;
    let cgpa = document.getElementById("cgpa").value;
    let val
    try{
         val = checkForDuplicate(usn)
    }
    catch(err){
        val = 'Exist';
        document.getElementById("dis").innerHTML = "Student already exist";
        document.getElementById("dis").style.backgroundColor = "red";
    }
    
    if(!val){
        let ob = new student(name,usn,no,cgpa);
        arr.push(ob);
        let dis = document.getElementById("dis");
        dis.innerHTML = "Student details submited"
        dis.style.backgroundColor ="green"

    }

}
function checkForDuplicate(usn){
    for(let i=0;i<arr.length;i++){
        if(arr[i].usn == usn)
        throw 'Exist'
    }
    return false;
}
let file = document.getElementById("my-file");
let message = document.getElementById("message");

file.addEventListener("input",()=>{
    if(file.files.length){
        let fileName = file.files[0].name;
        message.innerHTML = `${fileName}`;
    }
    else{
        message.innerHTML = 'please select a File';
    }
})
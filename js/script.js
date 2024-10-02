// function replaceName(){
//     let name = prompt("Who are you?", "Enter your name");
//     document.getElementById("welcome-name").innerHTML = name;
// }

// replaceName();

function validateForm(){
    const name = document.forms["message-form"]["full-name"].value;
    const birthdate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const pesan = document.forms["message-form"]["pesan"].value;

    // if(name == "" || birthdate == "" || gender == "" || pesan == ""){
    //     alert("Tidak boleh ada yang kosong");
    //     return false;
    // }

    if(name == ""){
        document.getElementById("error-name").innerHTML = "*Please input name first"
    }

    setSendUI(name, birthdate, gender, pesan);

    return false;
}

function setSendUI(name, birthdate, gender, pesan){
    document.getElementById("send-time").innerHTML = new Date();
    document.getElementById("send-fullname").innerHTML = name;
    document.getElementById("send-birthdate").innerHTML = birthdate;
    document.getElementById("send-gender").innerHTML = gender;
    document.getElementById("send-pesan").innerHTML = pesan;
}


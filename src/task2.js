document.getElementById("convert").onclick = function Con (){

    let hr=document.getElementById("hours").value;

    if(document.getElementById("minute").checked){
        document.getElementById("area").innerHTML= hr+" hour = "+(hr*60)+" minute ";
    }else if(document.getElementById("second").checked){
        document.getElementById("area").innerHTML= hr+" hour = "+(hr*60*60)+" second "
    }
}
document.getElementById("calculate").onclick = function calc() {
  let len = document.getElementById("length").value;
  let wid = document.getElementById("widt").value;

  if (len == 0 || wid == 0) {
    document.getElementById("area").innerHTML="Enter number>0";
    document.getElementById("area").style.color="red";
  } else {
    document.getElementById("area").innerHTML ="Area is " + len * wid + " sq. mtr.";
    document.getElementById("perimeter").innerHTML ="Perimeter is " + 2 * (length + wid)+ " mtr.";
  }
};

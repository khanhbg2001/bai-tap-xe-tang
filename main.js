function XuongDuoi(){
    let top= document.getElementById("tank").style["top"]
    top = parseInt(top)
    top = top + 19
    document.getElementById("tank").style["top"] = top + "px"
}
function LenTren(){
    let top= document.getElementById("tank").style["top"]
    top = parseInt(top)
    top = top - 19
    document.getElementById("tank").style["top"] = top + "px"
}
function SangTrai(){
    let left= document.getElementById("tank").style["left"]
    left = parseInt(left)
    left = left - 19
    document.getElementById("tank").style["left"] = left + "px"
}
function SangPhai(){
    let left= document.getElementById("tank").style["left"]
    left = parseInt(left)
    left = left + 19
    document.getElementById("tank").style["left"] = left + "px"
}
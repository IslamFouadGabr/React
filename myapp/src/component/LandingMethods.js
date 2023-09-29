function ActionOne(){
    let spanIDl =  document.getElementById("arrow-obe");
    let imgID = document.getElementById("imgid");
    let imgOld = document.getElementById("hide");

    spanIDl.addEventListener("click",() => {
        imgID.style.display = "none";
        imgOld.style.display = "inline-block"

    })
}
function ActionTwo(){

    let spanID = document.getElementById("arrow");
    let imgID = document.getElementById("imgid");
    let imgOld = document.getElementById("hide");
    spanID.addEventListener("click",() =>{
        imgID.style.display = "inline-block";
        imgOld.style.display= "none"

    } )
}
export default function  FullAction(){
    ActionOne();
    ActionTwo();
}
var flag = false;

DivObject = function(name) {
    if (flag == false){
        this.div = document.createElement("div");
        document.body.appendChild( this.div ) ;
        this.div.className = "panel" ;
        this.div.innerHTML = name;
        flag = true;
    }else{
        var div = document.getElementsByClassName("panel")[0];
        div.parentNode.removeChild(div);
        flag = false;
    }
}
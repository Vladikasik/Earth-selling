var flag = false;
var lastOpen = 'none';
// var mydata = JSON.parse(window.data);
// alert(mydata[0].name);
// alert(mydata[0].age);
// alert(mydata[1].name);
// alert(mydata[1].age);
DivObject = function(name) {
    if (flag == false){
        this.div = document.createElement("div");
        document.body.appendChild( this.div ) ;
        this.div.className = "panel" ;
        this.div.innerHTML = name;
        flag = true;
        lastOpen = name;
    }else{
        if (lastOpen == name){
            var div = document.getElementsByClassName("panel")[0];
            div.parentNode.removeChild(div);
            flag = false;
            lastOpen = 'none';
        }else{
            var div = document.getElementsByClassName("panel")[0];
            div.parentNode.removeChild(div);
            flag = false;
            lastOpen = 'none';
            this.div = document.createElement("div");
            document.body.appendChild( this.div ) ;
            this.div.className = "panel" ;
            this.div.innerHTML = name;
            flag = true;
            lastOpen = name;
        }
    }
}
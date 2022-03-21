var flag = false;
var lastOpen = 'none';

var data = {
    "1": {
        "name": "Остров 1",
        "description": "Описание обычного красивого острова<br/>Этот остров красивый",
        "price": "5",
        "link": "<a href='https://t.me/vladislav_ain_bot?start=1'>Купить в боте</a>"
    },
    "2": {
        "name": "Остров 2",
        "description": "Описание обычного красивого острова<br/>Этот остров красивый",
        "price": "3",
        "link": "<a href='https://t.me/vladislav_ain_bot?start=1'>Купить в боте</a>"
    },
    "3": {
        "name": "Остров 3",
        "description": "Описание обычного красивого острова<br/>Этот остров красивый",
        "price": "1",
        "link": "<a href='https://t.me/vladislav_ain_bot?start=1'>Купить в боте</a>"
    },
    "4": {
        "name": "Остров 4",
        "description": "Описание обычного красивого острова<br/>Этот остров красивый",
        "price": "5",
        "link": "<a href='https://t.me/vladislav_ain_bot?start=1'>Купить в боте</a>"
    },
    "5": {
        "name": "Остров 5",
        "description": "Описание обычного красивого острова<br/>Этот остров красивый",
        "price": "76",
        "link": "<a href='https://t.me/vladislav_ain_bot?start=1'>Купить в боте</a>"
    }
}


DivObject = function(name) {
    if (flag == false){
        this.div = document.createElement("div");
        document.body.appendChild( this.div ) ;
        this.div.className = "panel" ;
        this.div.innerHTML = data[name]["name"] + '<br/>' + data[name]["description"] + '<br/>' + data[name]["price"] + '<br/>' + data[name]["link"];
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
            this.div.innerHTML = data[name]["name"] + '<br/>' + data[name]["description"] + '<br/>' + data[name]["price"] + '<br/>' + data[name]["link"];
            flag = true;
            lastOpen = name;
        }
    }
}
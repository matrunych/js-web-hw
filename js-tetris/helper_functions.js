var getCurrentObject =  () => objects.find(object => object.state === 'falling');
var createPlayground = () => (new Array(10).fill().map( el => (new Array(5).fill())));

function leftBorder(object){
    if (object.state === "static")
        return false;

    for(pos of object.position){
        if(pos[1] == 0){
            return false;
        }
    }
    return true;
}


function rightBorder(object){
    if (object.state === "static")
        return false;
    for(pos of object.position){
        if(pos[1] >= 4){
            return false;
        }
    }

    return true;
}


function lowerBorder(object){
    if (object.state === "static") {
        return false;
    }
    for(pos of object.position){
        if(!object.position.some(e => e[0] == pos[0]-1 && e[1] == pos[1])){
            if(playground[pos[0] - 1][pos[1]] != undefined){
                object.state = 'static';
                createNewObject(INITIAL_POSITIONS, objects);
                console.log("No way down")
                for(block of object.position){
                    if(isFullRow(playground, block[0])){
                        destroyRow(playground, block[0]);
                    }
                    
                }
                return false;
            }
        }
    }
        return true;
}


function createNewObject(jsn, objects){
    console.log("creating new object");
    var randIndex = Math.floor(Math.random() * Object.keys(jsn).length);
    var randKey = Object.keys(jsn)[randIndex];
    objects.push({type: randKey, state: 'falling', position: jsn[randKey]})
}


function isFullRow(playground, row){
    var n = 0;
    for(var i = 0; i < 5; i++){
        if(playground[row][i] != undefined){
            n++;
        }
    } 
    if (n == 5){
        return true;
    }
    return false;
}


function destroyRow(playground, row){

    var newObjects = JSON.parse(JSON.stringify(objects));

    for(var i = 0; i < objects.length; i++){
        newObjects[i].position = [];
        for(var j = 0; j < objects[i].position.length; j ++){
            if(objects[i].position[j][0] != row){
                newObjects[i].position.push(objects[i].position[j])
            }
        }

    }


    objects = newObjects;

}

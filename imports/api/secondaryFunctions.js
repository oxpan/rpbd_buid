

function findBuff(buff,nam){
    for(let i = 0; i < buff.length;i++){
        if (nam === buff[i].name){
            return true;
        }
    }
    return false;
}


function getIDBuff(buff,nam){
    for(let i = 0; i < buff.length;i++){
        if (nam === buff[i].name){
            return buff[i]._id;
        }
    }
    return -1;
}



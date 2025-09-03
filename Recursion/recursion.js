let count = 0; 

function abc() {
    count ++;
    console.log(count);
    if(count > 4){
        return;
    }
    abc();
}

abc();
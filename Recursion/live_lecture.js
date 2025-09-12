function s(i){
    
    if(i<=1){
        return;
        console.log(i);
        
    }

    s(i-1)
    console.log(i)
}

s(5)
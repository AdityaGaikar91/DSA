// // Valid Parentheses

// class Stack{
//     constructor(){
//         this.arr=[];
//     }
//     push(data){
//         this.arr.push(data);
//     }
//     pop(){
//         if(this.isEmpty()){
//             return;
//         }
//         this.arr.pop();
//     }
//     size(){
//         return this.arr.length;
//     }
//     isEmpty(){
//         if(this.arr.length==0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     top(){
//         return this.arr[this.arr.length-1];
//     }
//     clear(){
//           this.arr=[];
//     }
// }
// let s1=new Stack();
// let str = "((())";
// for (let i=0;i<str.length;i++){
    
// }


class Stack{
    constructor(){
        this.arr=[];
    }
    push(data){
        this.arr.push(data);
    }
    pop(){
        if(this.isEmpty()){
            return;
        }
        this.arr.pop();
    }
    size(){
        return this.arr.length;
    }
    isEmpty(){
        if(this.arr.length==0){
            return true;
        }
        else{
            return false;
        }
    }
    top(){
        return this.arr[this.arr.length-1];
    }
    clear(){
          this.arr=[];
    }
}
let isValid=true;
let s=new Stack();
let str="((()))";
for(let i=0;i<str.length;i++){
    if(str[i]=='('){
        s.push(str[i]);
    }
    else{
        if(s.isEmpty()){
            isValid=false;
            break;
        }
        else{
            s.pop();
        }
    }
}
if(!s.isEmpty()){
    isValid=false;
}
console.log(isValid);






















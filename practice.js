const number =[1,2,3,4,5,6,7,8]

const isEven =()=>{
  number.forEach((num)=>{
    if(num %2 == 0){
        console.log("even",num)
    }   
    else{
        console.log('odd',num)
    }
  })
}

//isEven()

const addArray =()=>{
    let total =0;
    for(const num of number) {
         total += num ;
    }
    return total

}

console.log(addArray())

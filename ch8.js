function hasfive(numbers) {
    numbers.forEach(num=>{
        if (num == 5){
            console.log(true);
        }
    })
}
hasfive([1,2,3,5])
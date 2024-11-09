function checknum(numbers) {
    let check = 0;
    numbers.forEach(num =>{
        if (num % 2 == 0 || num % 7 == 0) {
            check += 1;
        }
    })
    if (check == numbers.length){
    console.log(true);
    } else {
    console.log(false);
    }
}
checknum([2, 7, 15, 4])
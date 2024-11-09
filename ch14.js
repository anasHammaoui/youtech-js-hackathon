function getcategory(age) {
    if (age <= 12){
        console.log("child");
    } else if (age > 12 && age < 20){
        console.log("teen");
    } else {
        console.log("adult")
    }
}
getcategory(14)
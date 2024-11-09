function getlevel(score) {
    if (score >= 95){
        console.log("A");
    } else if(score >= 85 && score < 95){
        console.log("B");
    } else if (score < 85 && score >= 75){
        console.log("C");
    }
}

getlevel(95);
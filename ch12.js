function hascolor(colors, favorite) {
    let fav = colors.filter(el => el === favorite);
    if (fav == favorite){
        console.log(true);
    } else {
        console.log(false);
    }
}
hascolor(["blue", "red", "green"], "yellow") 

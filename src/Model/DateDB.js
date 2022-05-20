function getDate(year, month, day){
    month += 1;
    let mon=''
    switch (month){
        case 1:default: mon='Jan';break;
        case 2:mon='Feb';break;
        case 3:mon='Mar';break;
        case 4:mon='Apr';break;
        case 5:mon='May';break;
        case 6:mon='Jun';break;
        case 7:mon='Jul';break;
        case 8:mon='Aug';break;
        case 9:mon='Sep';break;
        case 10:mon='Oct';break;
        case 11:mon='Nov';break;
        case 12:mon='Dec';break;
    }
    return mon+" "+day+", "+year
}

export default getDate
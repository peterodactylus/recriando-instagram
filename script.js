var heart = false;

function like(){

    if (heart) {
        document.getElementById("like").src = "/assets/icons/heart_like.svg";
        heart = false;
    } else {
        document.getElementById("like").src = "/assets/icons/red-heart.png";
        heart = true;
    }
    
}

var flag = false;

function favorite(){

    if (flag) {
        document.getElementById("favorito").src = "/assets/icons/favorite_flag.svg";
        flag = false;
    } else {
        document.getElementById("favorito").src = "/assets/icons/favorite_flag_fill.png";
        flag = true;
    }
    
}
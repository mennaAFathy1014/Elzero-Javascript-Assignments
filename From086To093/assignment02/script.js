let alldivs = document.getElementsByTagName("div");
for(i=0; i<alldivs.length; i++){
    alldivs[i].querySelector("img").setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png") ;
    alldivs[i].querySelector("img").setAttribute("alt", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png") ;
}
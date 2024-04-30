let buton = document.querySelector(".btn");
let theme ="light";

buton.addEventListener("click",function(){
    if(theme === "light"){
        document.documentElement.classList.add("dark-theme");
        theme ="dark";
        buton.textContent="Açık";
    }else if(theme === "dark"){
        document.documentElement.classList.remove("dark-theme");
        theme="light";
        buton.textContent="Koyu";
    }
});
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");

    if(themeToggle){
        themeToggle.textContent = "☀️";
    }
}

if(themeToggle){

    themeToggle.addEventListener("click", ()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        }else{
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }

    });

}

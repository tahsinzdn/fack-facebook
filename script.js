const btnList = document.querySelectorAll(".fBtn");

btnList.forEach(function(btn) {
    btn.addEventListener("click", function() {
        btn.innerHTML = "following";
    });
});


const srcbtn = document.querySelectorAll("#src-icon");

srcbtn.addEventListener("click", function(){
    console.log("clicked");
})
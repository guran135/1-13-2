const toggler = document.querySelector(".toggle");

window.addEventListener("click", (event) => {
    if (event.target.closest(".toggle")) {
        document.body.classList.toggle("show-nav");
        document.getElementById("deleteconpo").classList.toggle("deleteclass");
    } else if (event.target.classList.contains("overlay")) {
        document.body.classList.remove("show-nav");
        document.getElementById("deleteconpo").classList.toggle("deleteclass");
    }
});

// ドロワーのメニューをクリックしたら非表示
const hrefLink = document.querySelectorAll('.linkList li a');
hrefLink.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-nav");
        document.getElementById("deleteconpo").classList.toggle("deleteclass");
    });
});

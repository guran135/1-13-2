const body = document.body;
const deleteConpo = document.getElementById("deleteconpo");

window.addEventListener("pointerdown", (event) => {

    // トグルボタン
    if (event.target.closest(".toggle")) {
        body.classList.toggle("show-nav");
        deleteConpo.classList.toggle("deleteclass");
        return;
    }

    // overlay
    if (event.target.classList.contains("overlay")) {
        body.classList.remove("show-nav");
        deleteConpo.classList.remove("deleteclass");
    }
});

// メニュークリックで閉じる
document.querySelectorAll(".linkList a").forEach(link => {
    link.addEventListener("pointerdown", () => {
        body.classList.remove("show-nav");
        deleteConpo.classList.remove("deleteclass");
    });
});

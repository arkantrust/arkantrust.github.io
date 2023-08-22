document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-button");

    copyButtons.forEach(button => {
        const targetSelector = button.getAttribute("data-clipboard-target");
        const target = document.querySelector(targetSelector);
        const codeContent = target.textContent;

        const clipboard = new ClipboardJS(button, {
            text: () => codeContent.trim()
        });

        clipboard.on("success", e => {
            e.clearSelection();
            button.textContent = "Copied!";
            setTimeout(() => {
                button.textContent = "Copy";
            }, 2000);
        });
    });
});
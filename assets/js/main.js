const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const searchBtn = $(".search-wrapper");
const toolbarWrapper = $(".toolbar-wrapper");
const app = {
    handleEvents: function () {
        searchBtn.onclick = function () {
            Object.assign(toolbarWrapper.style, {
                visibility: "visible",
                opacity: "1",
                transform: "translateY(0)",
            });
        };
    },
    start: function () {
        this.handleEvents();
    },
};

app.start();

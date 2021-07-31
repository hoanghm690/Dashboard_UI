const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const searchBtn = $(".search-wrapper");
const toolbarWrapper = $(".toolbar-wrapper");
const cards = $(".cards");
const app = {
    cards: [
        {
            class: "sales",
            icon: '<i class="fab fa-android"></i>',
            data: "699k",
            title: "Weekly Sales",
        },
        {
            class: "users",
            icon: '<i class="fab fa-apple"></i>',
            data: "1.35m",
            title: "New Users",
        },
        {
            class: "orders",
            icon: '<i class="fab fa-windows"></i>',
            data: "1.72m",
            title: "Item Orders",
        },
        {
            class: "reports",
            icon: '<i class="fas fa-bug"></i>',
            data: "234",
            title: "Bug Reports",
        },
    ],

    reder: function () {
        const htmlCards = this.cards.map((card) => {
            return `<div class="${card.class} col-md-3">
                        <div class="card">
                            <div class="card-body text-center">
                                <div class="card-icon">
                                    ${card.icon}
                                </div>
                                <h3>${card.data}</h3>
                                <h6>${card.title}</h6>
                            </div>
                        </div>
                    </div>`;
        });
        cards.innerHTML = htmlCards.join("");
    },
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
        this.reder();
        this.handleEvents();
    },
};

app.start();

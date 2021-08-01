const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const searchBtn = $(".search-wrapper");
const toolbarWrapper = $(".toolbar-wrapper");
const sidebarMenu = $(".sidebar__menu ul");
const cards = $(".cards");
const users = $("#users-table tbody");
const app = {
    sidebarMenu: [
        {
            url: "/",
            icon: '<i class="fas fa-chart-pie"></i>',
            title: "Dashboard",
            isActive: true,
        },
        {
            url: "/",
            icon: '<i class="fas fa-user-friends"></i>',
            title: "User",
            isActive: false,
        },
    ],
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
    users: [
        {
            id: 1,
            avatar: "./assets/img/giphy.gif",
            name: "Ton Ton",
            company: "Pollich, Zboncak and Bergstrom",
            role: "Frontend Developer",
            verified: true,
            status: false,
        },
        {
            id: 2,
            avatar: "./assets/img/giphy.gif",
            name: "Hoang Huynh",
            company: "Rogahn Inc",
            role: "Backend Developer",
            verified: false,
            status: true,
        },
    ],
    // render data
    render: function () {
        const htmlSidebarMenu = this.sidebarMenu.map((sidebarMenu) => {
            return `<li class="${sidebarMenu.isActive == true ? "active" : ""}">
                        <a href="${sidebarMenu.url}">
                            ${sidebarMenu.icon}
                            <span>${sidebarMenu.title}</span>
                        </a>
                    </li>`;
        });
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
        const htmlUsers = this.users.map((user) => {
            return `<tr data-id=${user.id}>
                        <td width="48">
                            <button>
                                <input type="checkbox" 
                                       class="form-check-input input-checkbox-user"
                                       name="userIds[]"
                                       value="${user.id}" />
                            </button>
                        </td>
                        <td>
                            <img src="${user.avatar}"/>
                            <span>${user.name}</span>
                        </td>
                        <td>${user.company}</td>
                        <td>${user.role}</td>
                        <td>${user.verified == true ? "Yes" : "No"}</td>
                        <td>
                            ${
                                user.status == true
                                    ? '<span class="badge rounded-pill bg-success">Active</span>'
                                    : '<span class="badge rounded-pill bg-danger">Banned</span>'
                            }
                            
                        </td>
                        <td class="dropdown">
                            <button
                                type="button"
                                class="dropdown-toggle"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <i class="fas fa-pen"></i>
                                        Edit
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <i class="far fa-trash-alt"></i>
                                        Delete
                                    </a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    `;
        });
        sidebarMenu.innerHTML = htmlSidebarMenu.join("");
        cards.innerHTML = htmlCards.join("");
        users.innerHTML = htmlUsers.join("");
    },
    //Handle Events
    handleEvents: function () {
        //Search clicked
        searchBtn.onclick = function () {
            Object.assign(toolbarWrapper.style, {
                visibility: "visible",
                opacity: "1",
                transform: "translateY(0)",
            });
        };

        //Checkbox all changed
        var checkboxAll = $("#input-checkboxAll");
        var userItemCheckbox = $$('input[name="userIds[]"]');
        const _this = this;

        //checkbox all changed
        checkboxAll.onchange = function () {
            for (i = 0; i < userItemCheckbox.length; i++) {
                var user = userItemCheckbox[i];
                user.checked = this.checked;

                //user item checkbox changed
                user.onchange = function () {
                    var isCheckedAll =
                        userItemCheckbox.length ===
                        $$('input[name="userIds[]"]:checked').length;
                    checkboxAll.checked = isCheckedAll;
                    _this.renderSelectedAction();
                };
            }
            _this.renderSelectedAction();
        };
    },
    renderSelectedAction: function () {
        var checkedCount = $$('input[name="userIds[]"]:checked').length;
        var selectedAction = $(".selected-action");

        if (checkedCount > 0) {
            Object.assign(selectedAction.style, {
                visibility: "visible",
                opacity: "1",
            });
            $(".selected-action span").innerHTML = checkedCount + " selected";
        } else {
            Object.assign(selectedAction.style, {
                visibility: "hidden",
                opacity: "0",
            });
        }
    },
    start: function () {
        this.render();
        this.handleEvents();
    },
};

app.start();

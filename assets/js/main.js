const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const searchBtn = $(".search-wrapper");
const toolbarWrapper = $(".toolbar-wrapper");
const sidebarMenu = $(".sidebar__menu ul");
const cards = $(".cards");
const users = $("#users-table tbody");
const app = {
    currentIndex: 0,
    sidebarMenu: [
        {
            url: "#",
            icon: '<i class="fas fa-chart-pie"></i>',
            title: "Dashboard",
            // isActive: true,
        },
        {
            url: "#users",
            icon: '<i class="fas fa-user-friends"></i>',
            title: "User",
            // isActive: false,
        },
        {
            url: "#products",
            icon: '<i class="fas fa-shopping-bag"></i>',
            title: "Product",
            // isActive: false,
        },
        {
            url: "#blogs",
            icon: '<i class="fas fa-file-alt"></i>',
            title: "Blog",
            // isActive: false,
        },
        {
            url: "#login",
            icon: '<i class="fas fa-sign-in-alt"></i>',
            title: "Login",
            // isActive: false,
        },
        {
            url: "#register",
            icon: '<i class="fas fa-user-plus"></i>',
            title: "Register",
            // isActive: false,
        },
        {
            url: "#404",
            icon: '<i class="fas fa-exclamation-triangle"></i>',
            title: "Not Found",
            // isActive: false,
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
    renderSidebars: function () {
        const htmlSidebarMenu = this.sidebarMenu.map((sidebarMenu, index) => {
            return `<li data-index="${index}" class="sidebar-item ${
                index === this.currentIndex ? "active" : ""
            }">
                        <a href="${sidebarMenu.url}">
                            <div class="sidebar-menu__icon">${
                                sidebarMenu.icon
                            }</div>
                            <span>${sidebarMenu.title}</span>
                        </a>
                    </li>`;
        });
        sidebarMenu.innerHTML = htmlSidebarMenu.join("");
    },
    renderCards: function () {
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
    renderUsers: function () {
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
                                id="${user.id}"
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

        //main clicked
        $("main").onclick = function () {
            Object.assign(toolbarWrapper.style, {
                visibility: "hidden",
                opacity: "0",
                transform: "translateY(-100px)",
            });
        };

        //sidebar menu clicked
        sidebarMenu.onclick = function (e) {
            const menuNode = e.target.closest(".sidebar-item:not(.active)");
            // xử lý khi click vào menu
            if (menuNode) {
                _this.currentIndex = Number(menuNode.dataset.index);
                _this.renderSidebars();
            }
        };

        var sortName = $(".sort-name");
        var containerForm = document.forms["container-form-users"];
        var checkAllSubmitBtn = $(".check-all-submit-btn");
        var checkboxAll = $("#input-checkboxAll");
        var userItemCheckbox = $$('input[name="userIds[]"]');
        const _this = this;

        //checkbox all changed
        checkboxAll.onchange = function () {
            for (i = 0; i < userItemCheckbox.length; i++) {
                var user = userItemCheckbox[i];
                user.checked = this.checked;
            }
            _this.renderSelectedAction();
        };

        //user item checkbox changed
        for (i = 0; i < userItemCheckbox.length; i++) {
            userItemCheckbox[i].onchange = function () {
                var isCheckedAll =
                    userItemCheckbox.length ===
                    $$('input[name="userIds[]"]:checked').length;
                checkboxAll.checked = isCheckedAll;
                _this.renderSelectedAction();
            };
        }

        //delete all btn clicked
        checkAllSubmitBtn.onclick = function () {
            containerForm.submit();
        };

        //sort name clicked
        sortName.onclick = function () {
            $(".sort-name i").style.transform = "rotate(180deg)";
            _this.users.sort(_this.compareValues("name", "asc"));
            _this.renderUsers();
        };

        // //product sort item clicked
        // var sortItems = $$("#products .action .dropdown-menu li button");
        // var result = $(".caret");
        // for (i = 0; i < sortItems.length; i++) {
        //     sortItems[i].onclick = function (e) {
        //         result.innerText = sortItems[i].value.join("");
        //     };
        // }
    },
    renderSelectedAction: function () {
        var checkedCount = $$('input[name="userIds[]"]:checked').length;
        var selectedAction = $(".selected-action");

        if (checkedCount > 0) {
            Object.assign(selectedAction.style, {
                visibility: "visible",
                opacity: "1",
            });
            $(".selected-action span").innerText = checkedCount + " selected";
        } else {
            Object.assign(selectedAction.style, {
                visibility: "hidden",
                opacity: "0",
            });
        }
    },

    compareValues: function (key, order = "asc") {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
            const comparison = a[key].localeCompare(b[key]);
            return order === "desc" ? comparison * -1 : comparison;
        };
    },

    start: function () {
        this.renderSidebars();
        this.renderCards();
        this.renderUsers();
        this.handleEvents();
    },
};

app.start();

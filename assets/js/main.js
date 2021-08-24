const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const STORAGE_KEY = "UI_ADMIN";

const searchBtn = $(".search-wrapper .search-wrapper__icon");
const menuSidebarBtn = $(".search-wrapper .menu-wrapper__mobile");
const toolbarWrapper = $(".search-wrapper .toolbar-wrapper");
const sidebar = $(".sidebar");
const overlay = $(".sidebar-overlay");
const toTop = $(".to-top");

const sidebarMenus = $(".sidebar__menu ul");
const cards = $(".cards .row");
const users = $("#users-table tbody");
const products = $("#products .products .products-list");
const blogs = $("#blogs .blogs .blogs-list");
const trafficBySites = $("#traffic-by-site");
const tasks = $("#tasks");

// const prevBtn = $(".pagination-arrow.arrow-left");
// const nextBtn = $(".pagination-arrow.arrow-right");
// var current_page = 1;
// var records_per_page = 2;

const app = {
    currentIndex: 0,
    darkModeStatus: false,
    config: JSON.parse(localStorage.getItem(STORAGE_KEY)) || {},
    sidebarMenus: [
        {
            url: "#dashboard",
            icon: '<i class="fas fa-chart-pie"></i>',
            title: "Dashboard",
        },
        {
            url: "#users",
            icon: '<i class="fas fa-user-friends"></i>',
            title: "User",
        },
        {
            url: "#products",
            icon: '<i class="fas fa-shopping-bag"></i>',
            title: "Product",
        },
        {
            url: "#blogs",
            icon: '<i class="fas fa-file-alt"></i>',
            title: "Blog",
        },
        {
            url: "login.html",
            icon: '<i class="fas fa-sign-in-alt"></i>',
            title: "Login",
        },
        {
            url: "register.html",
            icon: '<i class="fas fa-user-plus"></i>',
            title: "Register",
        },
        {
            url: "404.html",
            icon: '<i class="fas fa-exclamation-triangle"></i>',
            title: "Not Found",
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
            avatar: "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_24.jpg",
            name: "Antonia Reichel",
            company: "Rogahn Inc",
            role: "Backend Developer",
            verified: false,
            status: true,
        },
        {
            id: 3,
            avatar: "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_14.jpg",
            name: "Sherman Beier",
            company: "Senger and Sons",
            role: "UX Designer",
            verified: false,
            status: false,
        },
        {
            id: 4,
            avatar: "https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_5.jpg",
            name: "Tanya Cormier",
            company: "Ledner - Thiel",
            role: "Leader",
            verified: true,
            status: true,
        },
    ],
    products: [
        {
            id: 1,
            name: "Nike Air Force 1 NDESTRUKT",
            url: "#product#",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_1.jpg",
            price_old: 116.75,
            price_new: 96.75,
            colors: ["green", "black"],
            isSale: true,
            isNew: false,
        },
        {
            id: 2,
            name: "Nike Space Hippie 04",
            url: "#product#",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_2.jpg",
            price_old: 34.93,
            price_new: 34.93,
            colors: ["white", "pink"],
            isSale: false,
            isNew: false,
        },
        {
            id: 3,
            name: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
            url: "#product#",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_3.jpg",
            price_old: 23.79,
            price_new: 9.41,
            colors: ["white", "pink"],
            isSale: false,
            isNew: true,
        },
        {
            id: 4,
            name: "Nike Blazer Low 77 Vintage",
            url: "#product#",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_4.jpg",
            price_old: 78.33,
            price_new: 78.33,
            colors: ["pink", "red", "blue"],
            isSale: false,
            isNew: false,
        },
        {
            id: 5,
            name: "Nike ZoomX SuperRep Surge",
            url: "#product#",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_5.jpg",
            price_old: 65.32,
            price_new: 65.32,
            colors: ["green", "black", "white"],
            isSale: false,
            isNew: false,
        },
        {
            id: 6,
            name: "Zoom Freak 2",
            url: "#product#",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_6.jpg",
            price_old: 21.21,
            price_new: 35.66,
            colors: ["green", "black", "white"],
            isSale: true,
            isNew: false,
        },
        {
            id: 7,
            name: "Nike Air Max Zephyr",
            url: "#product#",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_7.jpg",
            price_old: 33.26,
            price_new: 33.26,
            colors: ["green", "black", "white", "yellow"],
            isSale: false,
            isNew: false,
        },
        {
            id: 8,
            name: "Jordan Delta",
            url: "#product#",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_8.jpg",
            price_old: 60.57,
            price_new: 60.57,
            colors: ["green", "black", "white", "pink", "blue"],
            isSale: false,
            isNew: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!",
            created: "20 November 2020",
            url: "#blog#",
            author: "./assets/img/giphy.gif",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_1.jpg",
            comment: 13.45,
            view: 95.39,
            share: 99.17,
        },
        {
            id: 2,
            title: "Designify Agency Landing Page Design",
            created: "07 February 2021",
            url: "#blog#",
            author: "./assets/img/giphy.gif",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_2.jpg",
            comment: 56.61,
            view: 77.35,
            share: 52.04,
        },
        {
            id: 3,
            title: "✨What is Done is Done ✨",
            created: "10 May 2021",
            url: "#blog#",
            author: "./assets/img/giphy.gif",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_3.jpg",
            comment: 20.93,
            view: 36.35,
            share: 16.54,
        },
        {
            id: 4,
            title: "40 Free Serif Fonts for Digital Designers",
            created: "01 October 2020",
            url: "#blog#",
            author: "./assets/img/giphy.gif",
            img: "https://minimal-kit-react.vercel.app/static/mock-images/covers/cover_8.jpg",
            comment: 79.43,
            view: 28.13,
            share: 77.18,
        },
    ],
    trafficBySites: [
        {
            icon: '<i class="fab fa-facebook-f"></i>',
            social: "Facebook",
            traffic: 59.96,
        },
        {
            icon: '<i class="fab fa-google"></i>',
            social: "Google",
            traffic: 75.06,
        },
        {
            icon: '<i class="fab fa-linkedin-in"></i>',
            social: "Linkedin",
            traffic: 80.94,
        },
        {
            icon: '<i class="fab fa-twitter"></i>',
            social: "Twitter",
            traffic: 44.93,
        },
    ],
    tasks: [
        {
            id: 1,
            task: "Create FireStone Logo",
            completed: false,
        },
        {
            id: 2,
            task: "Add SCSS and JS files if required",
            completed: false,
        },
        {
            id: 3,
            task: "Stakeholder Meeting",
            completed: false,
        },
        {
            id: 4,
            task: "Scoping & Estimations",
            completed: false,
        },
        {
            id: 5,
            task: "Sprint Showcase",
            completed: false,
        },
    ],

    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.config));
    },
    // render data
    renderSidebars: function () {
        const htmlSidebarMenu = this.sidebarMenus.map((sidebarMenu, index) => {
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
        sidebarMenus.innerHTML = htmlSidebarMenu.join("");
    },
    renderCards: function () {
        const htmlCards = this.cards.map((card) => {
            return `<div class="${card.class} col-md-3 col-sm-6 col-xs-12">
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
                            <div class="d-flex align-items-center">
                                <img src="${user.avatar}"/>
                                <span>${user.name}</span>
                            </div>
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
                                    <a class="dropdown-item" href="#edit?id=${
                                        user.id
                                    }">
                                        <i class="fas fa-pen"></i>
                                        Edit
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#delete?id=${
                                        user.id
                                    }">
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
    renderProducts: function () {
        const htmlProducts = this.products.map((product) => {
            return `<div class="col-md-3 col-sm-6 col-xs-12">
                        <div class="card shadow" data-index=${product.id}>
                            <span class="${
                                product.isSale == true
                                    ? "sale"
                                    : "" || product.isNew == true
                                    ? "new"
                                    : ""
                            }">
                                ${
                                    product.isSale == true
                                        ? "sale"
                                        : "" || product.isNew == true
                                        ? "new"
                                        : ""
                                }
                            </span>
                            <img
                                src="${product.img}"
                                class="card-img-top"
                                alt="${product.name}"
                            />
                            <div class="card-body">
                                <a href="${product.url}">
                                    <h6 class="card-title pt-3">
                                        ${product.name}
                                    </h6>
                                </a>
                                <div class="card-text pt-3 pb-2">
                                    <span class="color">
                                        ${product.colors
                                            .map((color) => {
                                                return `<div class="${color}"></div>`;
                                            })
                                            .join("")}
                                    </span>
                                    <h6 class="price">
                                        <span class="price-old">
                                            ${
                                                product.price_old !==
                                                product.price_new
                                                    ? "$" + product.price_old
                                                    : ""
                                            }
                                        </span>
                                        <span class="price-new"> 
                                            $${product.price_new}
                                        </span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>`;
        });
        products.innerHTML = htmlProducts.join("");
    },
    renderBlogs: function () {
        const htmlBlogs = this.blogs.map((blog) => {
            return `<div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="card text-white">
                            <img src="${blog.img}" class="card-img" />
                            <div class="card-avatar">
                                <img src="${blog.author}" />
                            </div>
                            <div class="card-img-overlay">
                                <p class="card-created mb-1">
                                    ${blog.created}
                                </p>
                                <a href="${blog.url}" class="card-title">
                                    ${blog.title}
                                </a>
                                <div class="card-actions mt-2">
                                    <div class="card-actions__comments me-3">
                                        <i class="fas fa-comment-dots"></i>
                                        <span>${blog.comment}k</span>
                                    </div>
                                    <div class="card-actions__views me-3">
                                        <i class="fas fa-eye"></i>
                                        <span>${blog.view}k</span>
                                    </div>
                                    <div class="card-actions__shares">
                                        <i class="fas fa-share-alt"></i>
                                        <span>${blog.share}k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        });
        blogs.innerHTML = htmlBlogs.join("");
    },
    renderTrafficBySites: function () {
        const htmls = this.trafficBySites.map((site) => {
            return `<div class="col-md-6 mb-4">
                        <div class="text-center">
                            ${site.icon}
                            <h5 class="fw-bold">
                                ${site.traffic}k
                            </h5>
                            <p>${site.social}</p>
                        </div>
                    </div>`;
        });
        trafficBySites.innerHTML = htmls.join("");
    },
    renderTasks: function () {
        const htmls = this.tasks.map((task) => {
            return `<div class="form-check mb-2">
                        <button>
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value="${task.task}"
                                id="task-${task.id}"
                                name="taskIds[]"
                            />
                        </button>
                        <label class="form-check-label ms-2" for="task-${task.id}">
                            ${task.task}
                        </label>
                    </div>`;
        });
        tasks.innerHTML = htmls.join("");
    },

    //Handle Events
    handleEvents: function () {
        const taskItemsList = $$('input[name="taskIds[]"]');
        const checkboxAll = $("#input-checkboxAll");
        const userItemsList = $$('input[name="userIds[]"]');
        const darkModeCheck = $(".sidebar__darkmode .toggleWrapper #dn");
        const _this = this;

        // prevBtn.onclick = function () {
        //     if (current_page > 1) {
        //         current_page--;
        //         _this.renderUsers(current_page);
        //     }
        // };

        // nextBtn.onclick = function () {
        //     if (current_page < _this.numPages()) {
        //         current_page++;
        //         _this.renderUsers(current_page);
        //     }
        // };

        //Search clicked
        //Show toolbar wrapper (search)
        searchBtn.onclick = function () {
            toolbarWrapper.classList.add("show");
        };

        //Hide toolbar wrapper (search)
        $("main").onclick = function () {
            toolbarWrapper.classList.remove("show");
        };
        $(".sidebar").onclick = function () {
            toolbarWrapper.classList.remove("show");
        };

        //Sidebar menu clicked
        sidebarMenus.onclick = function (e) {
            const menuNode = e.target.closest(".sidebar-item:not(.active)");
            // xử lý khi click vào menu
            if (menuNode) {
                _this.currentIndex = Number(menuNode.dataset.index);
                _this.renderSidebars();
            }
        };

        //Scroll -> show to-top btn
        window.onscroll = function () {
            if (this.scrollY > 20) {
                toTop.classList.add("show");
            } else {
                toTop.classList.remove("show");
            }
        };

        //To top btn clicked
        toTop.onclick = function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        // toTop.onclick = function scrollToTop() {
        //     if (
        //         document.body.scrollTop !== 0 ||
        //         document.documentElement.scrollTop !== 0
        //     ) {
        //         window.scrollBy(0, -100);
        //         requestAnimationFrame(scrollToTop);
        //     }
        // };

        //Menu sidebar mobile clicked
        //Show sidebar menu
        menuSidebarBtn.onclick = function () {
            sidebar.classList.add("show");
        };

        //Hide sidebar menu
        overlay.onclick = function () {
            sidebar.classList.remove("show");
        };
        //

        //Checkbox all changed
        checkboxAll.onchange = function () {
            for (let userItem of userItemsList) {
                userItem.checked = this.checked;
            }
            _this.renderSelectedAction();
        };

        //user item checkbox changed
        for (let userItem of userItemsList) {
            userItem.onchange = function () {
                var isCheckedAll =
                    userItemsList.length ===
                    $$('input[name="userIds[]"]:checked').length;
                checkboxAll.checked = isCheckedAll;
                _this.renderSelectedAction();
            };
        }

        //Dark mode clicked switch
        darkModeCheck.onclick = function () {
            _this.darkModeStatus = !_this.darkModeStatus;
            _this.setConfig("darkModeStatus", _this.darkModeStatus);
            document.body.classList.toggle("dark");
        };

        //Task changed
        for (let item of taskItemsList) {
            item.onchange = function () {
                var itemParent = item.parentNode.parentElement;
                item.completed = !item.completed;
                itemParent.classList.toggle("done", item.completed);
                _this.setConfig("tasks", taskItemsList);
            };
        }
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

    loadConfig: function () {
        this.darkModeStatus = this.config.darkModeStatus;
    },

    mixedChart: function () {
        var options = {
            series: [
                {
                    name: "Team A",
                    type: "column",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                    name: "Team B",
                    type: "area",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                    name: "Team C",
                    type: "line",
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
            ],
            colors: ["#00ab55", "#ffc107", "#1890ff"],
            chart: {
                height: 350,
                type: "line",
                stacked: false,
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                width: [0, 2, 3],
                curve: "smooth",
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    columnWidth: "10%",
                },
            },
            fill: {
                opacity: [0.85, 0.1, 1],
                gradient: {
                    inverseColors: false,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100],
                },
            },
            labels: [
                "01/01/2003",
                "02/01/2003",
                "03/01/2003",
                "04/01/2003",
                "05/01/2003",
                "06/01/2003",
                "07/01/2003",
                "08/01/2003",
                "09/01/2003",
                "10/01/2003",
                "11/01/2003",
            ],

            markers: {
                size: 0,
            },
            xaxis: {
                type: "datetime",
            },
            yaxis: {
                min: 0,
                max: 80,
                tickAmount: 4,
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " visits";
                        }
                        return y;
                    },
                },
            },
        };

        var chart = new ApexCharts($("#mixedchart"), options);
        chart.render();
    },

    pieChart: function () {
        var options = {
            series: [4344, 5435, 1443, 4443],
            colors: ["#00ab55", "#1890ff", "#ffc107", "#ff4842"],
            chart: {
                type: "pie",
                height: "300px",
            },
            labels: ["America", "Asia", "Europe", "Africa"],
            legend: {
                position: "bottom",
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 350,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        };

        var chart = new ApexCharts($("#piechart"), options);
        chart.render();
    },

    barChart: function () {
        var options = {
            series: [
                {
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
                },
            ],
            colors: ["#00ab55"],
            chart: {
                type: "bar",
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    barHeight: "30%",
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: [
                    "Italy",
                    "Japan",
                    "China",
                    "Canada",
                    "France",
                    "Germany",
                    "South Korea",
                    "Netherlands",
                    "United States",
                    "United Kingdom",
                ],
            },
        };

        var chart = new ApexCharts($("#barchart"), options);
        chart.render();
    },

    radarChart: function () {
        var options = {
            series: [
                {
                    name: "Series 1",
                    data: [80, 50, 30, 40, 100, 20],
                },
                {
                    name: "Series 2",
                    data: [20, 30, 40, 80, 20, 80],
                },
                {
                    name: "Series 3",
                    data: [44, 76, 78, 13, 43, 10],
                },
            ],
            chart: {
                height: 350,
                type: "radar",
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1,
                },
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                width: 2,
            },
            fill: {
                opacity: 0.1,
            },
            markers: {
                size: 0,
            },
            xaxis: {
                categories: [
                    "English",
                    "History",
                    "Physics",
                    "Geography",
                    "Chinese",
                    "Math",
                ],
            },
        };

        var chart = new ApexCharts($("#radarchart"), options);
        chart.render();
    },

    start: function () {
        // gán cấu hình từ config vào ứng dụng
        this.loadConfig();
        this.renderSidebars();
        this.renderCards();
        this.renderUsers();
        this.renderProducts();
        this.renderBlogs();
        this.renderTrafficBySites();
        this.renderTasks();
        this.handleEvents();

        //api APEXCHARTS
        this.mixedChart();
        this.pieChart();
        this.barChart();
        this.radarChart();

        const darkModeCheck = $(".sidebar__darkmode .toggleWrapper #dn");
        !darkModeCheck.checked
            ? (darkModeCheck.checked = this.darkModeStatus) &&
              document.body.classList.add("dark")
            : (darkModeCheck.checked = !this.darkModeStatus) &&
              document.body.classList.remove("dark");
    },
};

app.start();

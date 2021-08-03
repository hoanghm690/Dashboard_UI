//Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(
            inputElement,
            options.formGroupSelector
        ).querySelector(options.errorSelector);
        var errorMessage;
        //Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rule & kiểm tra
        //Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case "radio":
                case "checkbox":
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ":checked")
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add(
                "invalid"
            );
        } else {
            errorElement.innerText = "";
            getParent(inputElement, options.formGroupSelector).classList.remove(
                "invalid"
            );
        }
        return !errorMessage;
    }
    //   Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        //Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;
            //Lặp qua từng rules và validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                //Trường hợp submit với js
                if (typeof options.onSubmit === "function") {
                    var enableInputs = formElement.querySelectorAll(
                        "[name]:not([disabled])"
                    );
                    var fomrValues = Array.from(enableInputs).reduce(function (
                        values,
                        input
                    ) {
                        switch (input.type) {
                            case "radio":
                                values[input.name] = formElement.querySelector(
                                    'input[name="' + input.name + '"]:checked'
                                ).value;
                                break;
                            case "checkbox":
                                if (!input.matches(":checked")) {
                                    values[input.name] = "";
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case "file":
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    },
                    {});
                    options.onSubmit(fomrValues);
                }
                //Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        };
        //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur,input,...)
        options.rules.forEach(function (rule) {
            //Lưu lại các rule cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function (inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };
                //Xử lý mỗi khi người dùng nhập input
                inputElement.oninput = function () {
                    var errorElement = getParent(
                        inputElement,
                        options.formGroupSelector
                    ).querySelector(options.errorSelector);
                    errorElement.innerText = "";
                    getParent(
                        inputElement,
                        options.formGroupSelector
                    ).classList.remove("invalid");
                };
                inputElement.onchange = function () {
                    validate(inputElement, rule);
                };
            });
        });
    }
}
// // Định nghĩa rules
// // Nguyên tắt của các rules:
// // 1. Khi có lỗi => Trả ra message lỗi
// // 2. Khi hợp lệ => Không trả ra cái gì cả (undefiend)
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || "Please enter this field";
        },
    };
};

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : "This field must be email";
        },
    };
};

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min
                ? undefined
                : `Please enter at least ${min} characters`;
        },
    };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue()
                ? undefined
                : message || `Input value is incorrect`;
        },
    };
};

//show password
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var showPasswordBtn = $(".show-password");
var showPasswordIcon = $(".show-password i");

showPasswordBtn.onclick = function () {
    var inputPassword = $("#password");
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        showPasswordIcon.classList.remove("fa-eye-slash");
        showPasswordIcon.classList.add("fa-eye");
    } else {
        inputPassword.type = "password";
        showPasswordIcon.classList.remove("fa-eye");
        showPasswordIcon.classList.add("fa-eye-slash");
    }
};

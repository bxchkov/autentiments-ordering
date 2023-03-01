//counter
document.querySelectorAll(".auten-counter").forEach(item => {
    let input = item.querySelector(".auten-counter__input");
    item.querySelectorAll(".auten-counter__button").forEach(button => {
        button.addEventListener("click", e => {
            input.value = Number.parseInt(input.value) + Number.parseInt(button.dataset.count);
            input.dispatchEvent(new Event("change"))
        })
    })
    input.addEventListener("change", e => {
        e.target.value = e.target.value > 0 ? e.target.value : 1;
    })
})

//radio
document.addEventListener("change", e => {
    if (!e.target.closest("input[type=radio]"))
        return;
    let input = e.target;
    let form = input.closest("form");
    if (!form)
        return;
    let otherRadios = form.querySelectorAll(`input[type=radio][name=${input.name}]`)
    otherRadios.forEach(radio => {
        if (radio !== input) {
            radio.dispatchEvent(new CustomEvent("radio-inactive", {
                bubbles: true
            }));
        }
    })
    input.dispatchEvent(new CustomEvent("radio-active", {
        bubbles: true,
    }))
})
document.addEventListener("radio-inactive", e => {
    e.target.closest(".auten-radio")?.classList.remove("checked");
})
document.addEventListener("radio-active", e => {
    e.target.closest(".auten-radio")?.classList.add("checked");
})
document.addEventListener("radio-inactive", e => {
    e.target.closest(`.auten-delivery-method`)?.classList.remove("active")
})
document.addEventListener("radio-active", e => {
    e.target.closest(`.auten-delivery-method`)?.classList.add("active")
})


// select
// при активации радио ставим активным родительский .auten-select-item и .auten-select
document.addEventListener("radio-active", e => {
    let item = e.target.closest(`.auten-select-item`);
    if (!item)
        return
    item.classList.add("checked");
    let select = item.closest(`.auten-select`);
    let active = select.querySelector(`.auten-select__active`);
    active.innerHTML = item.innerText;
    select.classList.remove('active');
})
// при деактивации радио удаляем checked
document.addEventListener("radio-inactive", e => {
    e.target.closest(".auten-select-item")?.classList.remove("checked");
})
// при клике вне .auten-select закрываем все
document.addEventListener("click", e => {
    if (e.target.closest(`.auten-select`))
        return;
    document.querySelectorAll(`.auten-select.active`).forEach(item => {
        item.classList.remove("active")
    })
})
// при клике на .auten-select__active открываем/закрываем
document.addEventListener("click", e => {
    let item = e.target.closest(`.auten-select__active`);
    if (!item)
        return;
    document.querySelectorAll(`.auten-select.active`).forEach(item => {
        item.classList.remove("active")
    })
    item.closest(`.auten-select`).classList.add("active");
})
// при загрузке страницы устанавливаем дефолтные значения
document.querySelectorAll(`.auten-select`).forEach(select => {
    let checked = select.querySelector(`.auten-select-item input:checked`);
    let active = select?.querySelector(`.auten-select__active`);
    if (!select.querySelector(".auten-select__items")?.querySelector(".auten-select-item")) {
        select.classList.add("no-items");
    }
    if (checked) {
        checked.dispatchEvent(new CustomEvent("radio-active", {bubbles: true}))
    } else if (active && active.innerHTML.replace(" ", "") === "") {
        checked = select.querySelector(`.auten-select-item input`);
        checked.dispatchEvent(new CustomEvent("radio-active", {bubbles: true}))
    }
})

//fields

document.addEventListener("focusin", e => {
    let field = e.target.closest(".auten-field");
    if (!field)
        return;
    let fieldValue = field.querySelector(".auten-field__input").value;
    field.classList.add("focus");
    if (fieldValue === ""){
        field.classList.remove("has-error");
    }
})
document.addEventListener("focusout", e => {
    let field = e.target.closest(".auten-field");
    if (!field)
        return;
    field.classList.remove("focus");
})
document.addEventListener("input", e=>{
    console.log("input");
})


//steps

// по дефолту прячем все элемы, имеющие степ состояния

function steps (stepAtr) {
    let steps = document.querySelectorAll(`[data-step-open]`);
    console.log(steps);
    steps.forEach(step=>{
        step.style.display = "none";
    })
    if (stepAtr){
        steps.forEach(step=>{
            step.style.display = "none";
        })
    }
}
steps();

// показываем дефолтные/изначальные степ элемы
let stepElems = document.querySelectorAll(`[data-step-open='cart']`);
console.log(stepElems);
stepElems.forEach(elem=>{
    elem.style.display = "";
})

// берем у нажатой с аттрибутом кнопки значение аттрибута и кадем в функцию step
document.addEventListener("click", e=>{
    let button = e.target.closest(`.auten-button[data-step]`);
    console.log(button);
    console.log(button.getAttribute("data-step"));
    step(button.getAttribute("data-step"));
})

//
function step(dataStep){
    switch (dataStep){
        case "deliveryMethods":

            break;
        case "delivery":

            break;
        case "cart":

            break;
        case "cart":
            break;
        case "cart":
            break;

    }
}

function stepsToggle(stepAtr) {

}

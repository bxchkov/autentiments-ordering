//счётчик
document.querySelectorAll(".auten-counter").forEach(item=>{
    let input = item.querySelector(".auten-counter__input");
    item.querySelectorAll(".auten-counter__button").forEach(button=>{
        button.addEventListener("click",e=>{
            input.value = Number.parseInt(input.value) + Number.parseInt(button.dataset.count);
            input.dispatchEvent(new Event("change"))
        })
    })
    input.addEventListener("change",e=>{
        e.target.value = e.target.value > 0?e.target.value:1;
    })
})

document.addEventListener("change",e=>{
    if(!e.target.closest(".auten-radio"))
        return;
    let input = e.target;
    let radio = input.closest(".auten-radio");
    let form = radio.closest("form");
    if(!form)
        return;
    let otherRadios = form.querySelectorAll(`input[type=radio][name=${input.name}]`)
    otherRadios.forEach(radio=>{
        if(radio !== input){
            radio.dispatchEvent(new CustomEvent("radio-inactive",{
                bubbles: true
            }));
        }
    })
    input.dispatchEvent(new CustomEvent("radio-active",{
        bubbles:true,
    }))
})
document.addEventListener("radio-inactive",e=>{
    e.target.closest(".auten-radio")?.classList.remove("checked");
})
document.addEventListener("radio-active",e=>{
    e.target.closest(".auten-radio")?.classList.add("checked");
})
document.addEventListener("radio-inactive",e=>{
    if(!e.target.closest(`.auten-delivery-method`))
        return;
    e.target.closest(`.auten-delivery-method`)?.classList.remove("active")
})
document.addEventListener("radio-active",e=>{
    if(!e.target.closest(`.auten-delivery-method`))
        return;
    e.target.closest(`.auten-delivery-method`)?.classList.add("active")
})
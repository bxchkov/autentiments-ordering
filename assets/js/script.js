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
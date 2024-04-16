const list = document.querySelectorAll("li");
console.log('list =>', list);

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", function () {
        onListShow(i)
    })

    list[i].addEventListener("mouseleave", function () {
        onListLeave(i)
    })
}

function onListShow(index) {
    if (list[index].querySelector("ul") != null) {
        list[index].children[0].style.display = "block"
    }
}

function onListLeave(index) {
    if (list[index].querySelector("ul") != null) {
        list[index].children[0].style.display = "none"
    }
}
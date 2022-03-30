let elements = [];

const input = document.getElementById('input-el');

const saveBtn = document.getElementById('input-btn');

const deleteBtn = document.getElementById('delete-btn');

const list = document.getElementById('ul-el');

const saveTab = document.getElementById('save-tab')

saveBtn.addEventListener("click", () => {
    if (input.value.length > 0) {
        elements.push(input.value);
        input.value = '';
        deleteValue();
    } else {
        alert("please enter the Link")
    }
})
deleteBtn.addEventListener("click", () => {

    elements = [];

    deleteValue();
})


saveTab.addEventListener('click', () => {

    let currentURL = window.location.href;

    elements.push(currentURL)

    deleteValue();

    console.log(currentURL)
})

function getData() {
    return JSON.parse(localStorage.getItem('elements') || "[]");
}

window.onload = function () {
    let Values = '';
    var list = document.getElementById('ul-el');
    const data = getData();
    for (i = 0; i < data.length; i++) {
        Values += `<li>
        <a target='_blank' href='${data[i]}'> ${data[i]}</a>
        </li>`;
    }
    list.innerHTML =Values;
}

function deleteValue() {

    let Values = '';

    for (let i = 0; i < elements.length; i++) {
        Values += `<li>
            <a target='_blank' href='${elements[i]}'>${elements[i]}</a>
            </li>`;
    }

    list.innerHTML = Values;
    localStorage.setItem("elements", JSON.stringify(elements));



}














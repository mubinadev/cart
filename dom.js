let input = document.querySelector("input")
let button = document.querySelector("button")
let list = document.querySelector("list")

getData()

button.addEventListener('click' , ()=>{
    addData();
});

function addData() {
    let obj = {
        name: input.value
    }
    let data = JSON.parse(localStorage.getItem("person")) || []
    data.push(obj)
    localStorage.setItem("person" ,JSON.stringify(data))
    getData()
}

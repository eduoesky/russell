let burger = document.getElementById('burger')
const lines = [
    document.getElementById('l1'),
    document.getElementById('l2'),
    document.getElementById('l3')
]

burger.addEventListener('mousedown', function() {
    lines.forEach(line => {
        line.style.backgroundColor = "#fff"
        line.style.border = "1px solid #fff"
    })
})

burger.addEventListener('mouseup', function() {
    lines.forEach(line => {
        line.style.backgroundColor = "#00008f"
        line.style.border = "1px solid #00008f"
    })
})

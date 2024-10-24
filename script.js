function calculateGrade() {
    const marks = Number(document.getElementById('marks').value);    

    if (marks >= 90) {
        let output = document.getElementById('grade')
        output.textContent = 'A'
        output.style.color = "lightgreen"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(9, 253, 1, 0.74), 0 6px 20px rgba(59, 247, 21, 0.884)"
        
    } else if (marks >= 80) {
        let output = document.getElementById('grade')
        output.textContent = 'B'
        output.style.color = "blue"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(5, 135, 241, 0.6), 0 6px 20px rgb(2, 72, 224)"
    } else if (marks >= 70) {
        let output = document.getElementById('grade')
        output.textContent = 'C'
        output.style.color = "yellow"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(235, 252, 3, 0.911), 0 6px 20px rgb(244, 248, 4)"
    } else if (marks >= 60) {
        let output = document.getElementById('grade')
        output.textContent = 'D'
        output.style.color = "orange"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgb(241, 186, 5), 0 6px 20px rgb(209, 171, 2)"
    } else {
        let output = document.getElementById('grade')
        output.textContent = 'F'
        output.style.color = "red"

        let box = document.querySelector(".box")
        box.style.boxShadow = "0 4px 8px rgba(243, 1, 1, 0.973), 0 6px 20px rgba(255, 0, 0, 0.692)"
    }    
}

function reset() {
    document.getElementById('marks').value = ''
    document.getElementById('grade').textContent = ''

    let box = document.querySelector(".box")
    box.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.6), 0 6px 20px rgba(255, 255, 255, 0.4)"
}

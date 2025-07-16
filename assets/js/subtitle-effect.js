let text = "Desenvolvedor Full Stack_"
const mainSubtitle = document.getElementById('mainSubtitle')

let i = 0

function subtitleEffect() {
    if (i < text.length) {
        mainSubtitle.textContent += text.charAt(i)
        i++
        setTimeout(subtitleEffect, 120)
    }
}

subtitleEffect()
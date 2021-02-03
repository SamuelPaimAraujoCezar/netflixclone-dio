$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

function moreInfo() {
    window.open("https://www.themoviedb.org/tv/40008-hannibal?language=pt-BR")
}

function play() {
    window.open("https://www.themoviedb.org/tv/40008-hannibal?language=pt-BR#play=T1vbaPDQKE4")
}

function openInfo(element) {
    window.open("https://" + element)
}
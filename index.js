homePtn = document.getElementById("home-pt")
guestPtn = document.getElementById("guest-pt")

homeCount = 0
guestCount = 0

function add1pth () {
    homeCount += 1
    homePtn.innerText = homeCount
}

function add2pth () {
    homeCount += 2
    homePtn.innerText = homeCount
}

function add3pth () {
    homeCount += 3
    homePtn.innerText = homeCount
}

function add1ptg () {
    guestCount += 1
    guestPtn.innerText = guestCount
}

function add2ptg () {
    guestCount += 2
    guestPtn.innerText = guestCount
}

function add3ptg () {
    guestCount += 3
    guestPtn.innerText = guestCount
}

function resetPoint() {
    homeCount = 0
    guestCount = 0
    homePtn.innerText = homeCount
    guestPtn.innerText = guestCount
}
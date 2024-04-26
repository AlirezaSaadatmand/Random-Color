'use strict'
let Body = document.getElementById('body'); //body
let ButtonStart = document.querySelector('#toggle-start-stop'); //start or stop button
let Save = document.getElementById('save'); //save button
let Favorite = document.getElementById('favorites') // favorites button
let Text = document.getElementById('text');
let Delete = document.getElementById('delete');
let next = document.getElementById('next');
let previous = document.getElementById('previous');


//color choosing

function RandomColor(object) {
    if (object == 1) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        Body.style.backgroundColor = `rgb(${r} , ${g} , ${b})`
    }
    if (object == 2) {
        return Body.style.backgroundColor
    }
}

//stoping and starting the wheel of showing
let time

function showing(object) {
    if (object == 2) {
        time = setInterval(() => {
            RandomColor(1)
        }, 1000);
    }
    if (object == 1) {
        clearInterval(time)
    }

}

function start() {
    while (true) {
        if (ButtonStart.innerHTML == 'stop') {
            ButtonStart.innerHTML = 'start'
            showing(1)
            break
        }

        if (ButtonStart.innerHTML == 'start') {
            ButtonStart.innerHTML = 'stop'
            Text.innerHTML = ''
            Delete.style.display = 'none'
            Save.style.display = 'inline-block'
            next.style.display = 'none'
            previous.style.display = 'none'
            Favorite.innerHTML = `favorites ${Savingslist.length}`;

            showing(2)
            break
        }

    }
}
////////////////////////////////////////////////////////////////////////////
let Savingslist = [];
// let SavingsLength = Savings.length;

function saves() {
    Savingslist.push(String(RandomColor(2)))
    const name = new Set(Savingslist);
    const Savings = [...name]
    Savingslist = Savings
        // SavingsLength = Savings.length;
    Favorite.innerHTML = `favorites ${Savings.length}`;
}

let count = 0

function ShowFavorites() {
    showing(1)
    Body.style.backgroundColor = `${Savingslist[0]}`
    ButtonStart.innerHTML = 'start'
    Text.innerHTML = Savingslist[0]
    Delete.style.display = 'inline-block'
    Save.style.display = 'none'
    next.style.display = 'inline-block'
    previous.style.display = 'none'
    Favorite.innerHTML = `favorites ${count+1} / ${Savingslist.length}`
    if (Savingslist.length == 1) {
        previous.style.display = 'none'
        next.style.display = 'none'

    }
}

function DeleteItem() {

    while (true) {
        if (count == Savingslist.length - 1 && Savingslist.length > 2) {
            Savingslist.splice(count, 1);
            count -= 1
            ShowFavorites()
            next.style.display = 'none'
            previous.style.display = 'inline-block'
            break
        }
        if (count == Savingslist.length - 1 && Savingslist.length == 2) {
            Savingslist.splice(count, 1);
            count -= 1
            ShowFavorites()
            previous.style.display = 'none'
            next.style.display = 'none'
            break
        }
        if (count != Savingslist.length - 1 && count != 0) {

            if (count != 1 && Savingslist.length > 3) {
                Savingslist.splice(count, 1);
                count -= 1
                ShowFavorites()
                previous.style.display = 'inline-block'

                break
            }
            Savingslist.splice(count, 1);
            count -= 1
            ShowFavorites()
            break
        }
        if (count == 0 && Savingslist.length > 2) {
            Savingslist.splice(count, 1)
            ShowFavorites()
            break
        }
        if (count == 0 && Savingslist.length == 2) {
            Savingslist.splice(count, 1)
            ShowFavorites()
            break
        }
        if (count == 0 && Savingslist.length == 1) {
            Savingslist.splice(count, 1);
            location.reload()
            break
        }
    }
}

function Next() {
    if (count != Savingslist.length - 1) {
        count += 1
        Body.style.backgroundColor = `${Savingslist[count]}`
        Text.innerHTML = `${Savingslist[count]}`
        previous.style.display = 'inline-block'
        Favorite.innerHTML = `favorites ${count+1} / ${Savingslist.length}`


    }
    if (count == Savingslist.length - 1) {
        next.style.display = 'none'
    }
}

function Previous() {
    if (count != 0) {
        count -= 1
        Body.style.backgroundColor = `${Savingslist[count]}`
        Text.innerHTML = `${Savingslist[count]}`
        next.style.display = 'inline-block'
        Favorite.innerHTML = `favorites ${count+1} / ${Savingslist.length}`

    }
    if (count == 0) {
        previous.style.display = 'none'
    }
}
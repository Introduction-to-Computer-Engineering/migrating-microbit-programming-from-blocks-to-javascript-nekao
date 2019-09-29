input.onButtonPressed(Button.AB, function () {
    index = 0
    yindex = 0
    if (health > 0) {
        for (let yindex2 = 0; yindex2 <= 4; yindex2++) {
            for (let xindex = 0; xindex <= 4; xindex++) {
                led.plot(xindex, yindex2)
                basic.pause(1)
                led.unplot(xindex, yindex2)
                basic.pause(1)
            }
        }
        basic.showNumber(health)
        basic.showIcon(IconNames.Silly)
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = Math.randomRange(0, 3)
    if (health > 0) {
        if (hand == 0) {
            health += -100
            basic.showIcon(IconNames.Surprised)
        } else if (hand == 1) {
            health += -1
            basic.showIcon(IconNames.Asleep)
        } else if (hand == 2) {
            health += -50
            basic.showIcon(IconNames.Angry)
        } else {
            health += -10
            basic.showIcon(IconNames.Sad)
        }
    }
})
let hand = 0
let yindex = 0
let index = 0
let health = 0
health = 100
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
        health = 100
    }
    if (health > 0) {
        if (input.buttonIsPressed(Button.A)) {
            while (input.buttonIsPressed(Button.A)) {
                health += 10
                basic.showIcon(IconNames.Heart)
                basic.showIcon(IconNames.SmallHeart)
            }
            basic.showIcon(IconNames.Happy)
        }
    } else {
        basic.showIcon(IconNames.Skull)
    }
})

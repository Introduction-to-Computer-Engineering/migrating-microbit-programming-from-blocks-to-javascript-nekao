input.onGesture(Gesture.Shake, function () {
    hand = Math.randomRange(0, 3)
    if (health > 0) {
        if (hand == 0) {
            health += -2
        } else if (hand == 1) {
            health += -1
        } else if (hand == 2) {
            health += -50
        } else {
            health += -10
        }
    } else {
        health = 1
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        decimal += -1
    } else if (receivedNumber == 1) {
        decimal += 1
    } else if (receivedNumber == 2) {
        decimal += 2
    } else {
        decimal += 3
    }
})
let yindex = 0
let index = 0
let decimal = 0
let hand = 0
let health = 0
health = 1
radio.setGroup(1)
let text_list = ["nice", "great", "plant lives"]
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        index = 0
        yindex = 0
        if (health >= 1) {
            for (let yindex2 = 0; yindex2 <= 4; yindex2++) {
                for (let xindex = 0; xindex <= 4; xindex++) {
                    led.plot(xindex, yindex2)
                    basic.pause(1)
                    led.unplot(xindex, yindex2)
                    basic.pause(1)
                }
            }
            basic.showNumber(health)
            let random = Math.randomRange(0, text_list.length)
            basic.showString(text_list[random])
        } else {
            health = 1
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (health >= 1) {
        if (input.buttonIsPressed(Button.A)) {
            while (input.buttonIsPressed(Button.A)) {
                led.toggle(1, 0)
                led.toggle(3, 0)
                basic.pause(250)
                led.toggle(1, 1)
                led.toggle(3, 1)
                basic.pause(1000)
                health += 0.25
            }
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        health = 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        health = 1
    }
    if (health >= 1) {
        if (health >= 1) {
            led.plot(2, 4)
            led.setBrightness(14)
        }
        if (health >= 2) {
            led.plot(2, 3)
            led.setBrightness(71)
        }
        if (health >= 3) {
            led.plot(3, 2)
            led.setBrightness(70)
        }
        if (health >= 4) {
            led.plot(1, 2)
            led.setBrightness(108)
        }
        if (health >= 5) {
            led.plot(4, 1)
            led.setBrightness(143)
        }
        if (health >= 6) {
            led.plot(0, 1)
            led.setBrightness(155)
        }
        if (health >= 7) {
            led.plot(2, 2)
            led.setBrightness(182)
        }
        if (health >= 8) {
            led.plot(2, 1)
            led.setBrightness(221)
        }
        if (health >= 9) {
            led.plot(2, 0)
            led.setBrightness(255)
        }
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.ScreenDown) && input.buttonIsPressed(Button.A)) {
        radio.sendNumber(2)
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B) && input.isGesture(Gesture.ScreenDown)) {
        radio.sendNumber(0)
    }
})

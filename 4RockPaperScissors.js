let hand = 0
let A = 0
let B = 0
input.onGesture(Gesture.Shake, function () {
    hand = Math.randomRange(0, 3)
    if (hand == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . # . # .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    A += 1
    basic.pause(100)
    basic.showString("Wins")
    basic.showNumber(A)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.pause(100)
    basic.showString("loss")
    basic.showNumber(B)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("total Games")
    basic.showNumber(A + B)
    basic.pause(100)
    if (A >= B) {
        basic.showString("Human Wins")
    } else {
        basic.showString("Human Loss")
    }
})
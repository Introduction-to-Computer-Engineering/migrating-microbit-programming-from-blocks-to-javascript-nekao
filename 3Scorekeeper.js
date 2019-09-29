let PlayerBWins = 0
let PlayersTie = 0
let PlayerAWins = 0
input.onButtonPressed(Button.B, function () {
    PlayerBWins += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    PlayersTie += 1
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Total rounds played:")
    basic.showNumber(PlayerAWins + PlayerBWins + PlayersTie)
    basic.showString("Wins:")
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showNumber(PlayerAWins)
    basic.pause(1000)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.showNumber(PlayerBWins)
    basic.pause(1000)
    basic.showString("Ties:")
    basic.showNumber(PlayersTie)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    PlayerAWins += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})
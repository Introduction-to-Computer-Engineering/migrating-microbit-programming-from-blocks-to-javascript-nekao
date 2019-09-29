let PlayerBScore = 0
let PlayerAScore = 0
let CoinBHeads = false
let CoinAHeads = false
input.onButtonPressed(Button.A, () => {
    CoinAHeads = Math.randomBoolean()
    CoinBHeads = Math.randomBoolean()
    PlayerAScore = 0
    PlayerBScore = 0
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
input.onGesture(Gesture.Shake, () => {
    CoinAHeads = true
    CoinBHeads = true
    if (CoinAHeads == CoinBHeads) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        PlayerAScore += 1
    } else {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
        PlayerBScore += 1
    }
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
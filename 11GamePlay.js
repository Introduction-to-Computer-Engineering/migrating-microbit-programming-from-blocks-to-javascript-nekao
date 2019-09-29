input.onGesture(Gesture.ScreenUp, function () {
    basic.showString("" + arrayWords[index])
})
input.onGesture(Gesture.ScreenDown, function () {
    led.stopAnimation()
    basic.clearScreen()
    if (index < arrayWords.length - 1) {
        index += 1
    } else {
        game.gameOver()
    }
})
let index = 0
let arrayWords: string[] = []
arrayWords = ["cat", "guitar", "flashlight", "cupcake", "tree", "frisbee"]
index = 0
basic.showLeds(`
    . # # # .
    . . . # .
    . . # # .
    . . . . .
    . . # . .
    `)
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.showString("" + arrayWords[index])

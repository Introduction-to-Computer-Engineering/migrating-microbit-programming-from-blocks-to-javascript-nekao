let list: number[] = []
list = [5, 2, 1, 3, 4]
input.onButtonPressed(Button.A, () => {
    for (let i = 0; i <= list.length - 1; i++) {
        for (let j = 0; j <= list[i] - 1; j++) {
            led.plot(Math.randomRange(0, 5), Math.randomRange(0, 5))
        }
        basic.pause(1000)
        basic.clearScreen()
    }
})

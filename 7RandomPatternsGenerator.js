input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, Math.randomRange(0, 5))
    }
 })
 input.onButtonPressed(Button.B, () => {
    if (led.point(0, 0)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
 })
input.onButtonPressed(Button.A, () => {
    led.setBrightness(led.brightness() - 25)
 })
 input.onButtonPressed(Button.B, () => {
    led.setBrightness(led.brightness() + 25)
 })
 input.onButtonPressed(Button.AB, () => {
    basic.clearScreen()
    basic.showNumber(led.brightness())
    basic.showIcon(IconNames.Heart)
 })
 led.setBrightness(255)
 basic.showIcon(IconNames.Heart)
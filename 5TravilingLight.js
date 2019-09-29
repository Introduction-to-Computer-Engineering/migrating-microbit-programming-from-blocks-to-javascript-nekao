let yindex = 0
let index = 0
basic.forever(function () {
    for (let yindex2 = 0; yindex2 <= 4; yindex2++) {
        for (let xindex = 0; xindex <= 4; xindex++) {
            led.plot(xindex, yindex2)
            basic.pause(100)
            led.unplot(xindex, yindex2)
            basic.pause(100)
        }
    }
})
input.onGesture(Gesture.Shake, () => {
    while (!(input.buttonIsPressed(Button.A))) {
        for (let i = 0; i < 2; i++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
        }
    }
})
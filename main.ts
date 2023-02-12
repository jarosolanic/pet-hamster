input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Skull)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Silly)
})
basic.showIcon(IconNames.Skull)

function increase () {
    guess += 1
}
function decrease () {
    guess += -1
}
input.onButtonPressed(Button.A, function () {
    decrease()
    basic.showNumber(guess)
})
input.onButtonPressed(Button.AB, function () {
    if (number < guess) {
        basic.showString("higher")
    }
    if (number > guess) {
        basic.showString("lower")
    }
    if (number == guess) {
        basic.showString("correct")
    }
})
input.onButtonPressed(Button.B, function () {
    increase()
    basic.showNumber(guess)
})
function Randomizer () {
    number = randint(0, 20)
    guess = 0
}
let number = 0
let guess = 0
Randomizer()

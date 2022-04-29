let 自分の手 = 0
let 相手の手 = 0
input.onButtonPressed(Button.A, function () {
    自分の手 += 1
    if (自分の手 > 2) {
        自分の手 = 0
    }
    手を確認する(自分の手)
})
function じゃんけん (自分の手: number, 相手の手: number) {
    if (自分の手 == 相手の手) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            `)
    } else if (自分の手 == 0 && 相手の手 == 1 || (自分の手 == 1 && 相手の手 == 2 || 自分の手 == 2 && 相手の手 == 0)) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.clearScreen()
}
function 手を確認する (手: number) {
    if (手 == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (手 == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    相手の手 = randint(0, 2)
    手を確認する(相手の手)
    じゃんけん(自分の手, 相手の手)
})

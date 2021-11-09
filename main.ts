
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    
    info.changeScoreBy(1)
})


game.onUpdateInterval(1000, function  () {

    let killMe = sprites.create(img`
        ....ffffff.........888..
        ....ff2288f.......884f..
        .....ff8888fff...8844f..
        ....88244422228888442f..
        ...89b442222222288422f..
        ..8999b2222222222222f8..
        .82b99111b2222222228228.
        8222b111992222888888822f
        f222222222222822288fffff
        .f2222222222442222f.....
        ..ff22222228f442222f....
        ....ffffffffff4422228...
        .........f28fff822228...
        .........f882ffffffff...
        ..........f82ffff.......
        ...........fffff........
    `, SpriteKind.Enemy)
    killMe.setPosition(160, randint(0, 120))
    killMe.setFlag(SpriteFlag.AutoDestroy, true)

    if (info.score() <= 10){
        killMe.setVelocity(-40, 0);
    }
    else if(info.score() >= 11 && info.score() <= 20){
        killMe.setVelocity(-60, 0)
    } 
    else if (info.score() >= 21 && info.score() <= 30) {
        killMe.setVelocity(-80, 0)
    }
    else if (info.score() >= 31 && info.score() <= 40) {
        killMe.setVelocity(-100, 0)
    }
    else if (info.score() >= 41 && info.score() <= 50) {
        killMe.setVelocity(-120, 0)
    }
    else if (info.score() >50) {
        killMe.setVelocity(-140, 0)
    }
})





let ship = sprites.create(img`
    ........feebbbef........
    ........f24bdb2e........
    .......ce2222222e.......
    ......cbc22bb22e6cf.....
    ......b962e99e2b6dc.....
    ......c6b2e69e2e6bf.....
    ...cccee222ab222eeeccc..
    .fbbbddddb4eeebbbbbbbbcf
    febbddbcdddbbdddbcbbbbbf
    fe2bddcbdddcbddddccbb42f
    .f24bddddddbbdddbbbb42f.
    ..ff24bddddddddbbbb22f..
    ....fee244bbbb4444ee....
    .....fbbe2222e22ebbf....
    ......ffffbbbbfffff.....
    ..........fffff.........
`, SpriteKind.Player)
ship.setPosition(10, 60)
controller.moveSprite(ship, 0, 100)
ship.setFlag(SpriteFlag.StayInScreen, true)


info.setScore(0)

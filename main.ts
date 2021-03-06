namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    myEnemy.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f . . . . 
. . . f a a a a a a a f . . . . 
. . . f a 2 2 2 2 2 a f . . . . 
. . . f a 2 8 8 8 2 a f . . . . 
. . . f a 2 8 1 8 2 a f . . . . 
. . . f a 2 8 8 8 2 a f . . . . 
. . . f a 2 2 2 2 2 a f . . . . 
. . . f a a a a a a a f . . . . 
. . . f f f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 100, -100)
    projectile.startEffect(effects.hearts, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.builtin.crowd9)
})
let projectile: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
2 . . . . . . . . . . . . . . . 
. 3 3 3 . . . . . . . . . . . . 
. . . 3 3 3 3 3 3 3 . . . . . . 
. . . . . 3 3 3 3 3 3 3 3 3 . . 
. . . . 3 3 2 2 2 2 2 f f 2 3 . 
. . . . 3 2 2 1 1 2 2 f 1 f 3 . 
. . . 3 3 2 1 f 1 2 2 1 f f 3 . 
. . . 3 3 2 1 1 f 2 2 2 2 2 3 . 
. 7 . 3 2 2 2 2 2 2 2 2 2 3 7 . 
7 7 3 3 3 3 3 2 3 3 3 2 3 3 7 7 
. 7 7 7 3 3 3 3 3 3 3 3 3 7 7 . 
. . . . . a a . . . a a . . . . 
. . . . a a a . . . a a a . . . 
. . . . a a . . . . . a a . . . 
. 2 . a a a . . . . . a a a . 2 
. a a a a . . . . . . . a a a a 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`20002800171717171717171717171717171717170000000000000000000000000000000017141414141414171414141414141417000000000000000000000000000000001717171717171417141414141414141700000000000000000000000000000000171414141417141714141717171414170000000000000000000000000000000017141717141714171414141417171417000000000000000000000000000000001714141714171417141414141417141700000000000000000000000000000000171414141414141714141714141714170000000000000000000000000000000017141717171717171414171714171417000000000000000000000000000000001714171414141414141414171417141700000000000000000000000000000000171417141414171717141717141414170000000000000000000000000000000017141714141417141414141714141417000000000000000000000000000000001714171414141414141414171414141700000000000000000000000000000000171417171414171714171717141414170000000000000000000000000000000017141414141414141417141414171717000000000000000000000000000000001714141414141714141714141417141700000000000000000000000000000000171414171717171414141414171714170000000000000000000000000000000017141417141417141414141414141417000000000000000000000000000000001714171714141717171717171717141700000000000000000000000000000000171417141414141414141414141414191b1b1b1b1b1b1b1b1b1b1b1b1b1b1b00171717171717171717171717171717171b1b1b1b1b1b1b1b1b1b1b1b1b1b1b00000000000000000000000000000000001b1b1b1b1b1b1b1b1b1b1b1b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 
2 . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 
2 . . . . 2 . 2 . . 2 2 2 . . 2 . . . . . . . . . . . . . . . . 
2 . 2 2 . 2 . 2 . . . . 2 2 . 2 . . . . . . . . . . . . . . . . 
2 . . 2 . 2 . 2 . . . . . 2 . 2 . . . . . . . . . . . . . . . . 
2 . . . . . . 2 . . 2 . . 2 . 2 . . . . . . . . . . . . . . . . 
2 . 2 2 2 2 2 2 . . 2 2 . 2 . 2 . . . . . . . . . . . . . . . . 
2 . 2 . . . . . . . . 2 . 2 . 2 . . . . . . . . . . . . . . . . 
2 . 2 . . . 2 2 2 . 2 2 . . . 2 . . . . . . . . . . . . . . . . 
2 . 2 . . . 2 . . . . 2 . . . 2 . . . . . . . . . . . . . . . . 
2 . 2 . . . . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . 
2 . 2 2 . . 2 2 . 2 2 2 . . . 2 . . . . . . . . . . . . . . . . 
2 . . . . . . . . 2 . . . 2 2 2 . . . . . . . . . . . . . . . . 
2 . . . . . 2 . . 2 . . . 2 . 2 . . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 . . . . . 2 2 . 2 . . . . . . . . . . . . . . . . 
2 . . 2 . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . 
2 . 2 2 . . 2 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . 
2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.builtin.forestTiles21,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles14,sprites.builtin.forestTiles12,sprites.builtin.forestTiles13,sprites.builtin.forestTiles9,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles16,sprites.builtin.forestTiles10,sprites.builtin.coral2,sprites.builtin.oceanDepths7,sprites.dungeon.stairLadder,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestOpen,sprites.dungeon.chestClosed,sprites.vehicle.roadIntersection4,sprites.builtin.crowd9],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundCenter)
scene.cameraFollowSprite(mySprite)
info.startCountdown(25)
myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. a a . . . . . . . . . . . . . 
. a a a . . . . . . . . . . . . 
. . a a a a a a a a a a . . . . 
. . a 2 a a a 2 2 2 2 a . . . . 
. . a 2 2 2 a a a f 2 a . . . . 
. . a a 2 2 2 2 a a 2 a . . . . 
. . . a a f 2 2 2 a a a . . . . 
. . . . a a a a a a a a . . . . 
. . . . a a . . . . a a a . . . 
. . . . . . . . . . . . a a . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
tiles.placeOnRandomTile(myEnemy, sprites.dungeon.darkGroundCenter)
myEnemy.follow(mySprite, 150)

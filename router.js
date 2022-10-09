import Router from '@koa/router'

import * as users from './app/users/index.js'
import * as hunches from './app/hunches/index.js'
import * as games from './app/games/index.js'

export const router = new Router()
//users
router.post('/users', users.create)

//palpites
router.post('/hunches', hunches.create)

//games
router.get('/games', games.list)

//login
router.get('/login', users.login)

router.get('/:username', users.hunches)

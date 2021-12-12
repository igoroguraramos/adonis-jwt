'use strict'

class UserController {
  async login ({ auth, request }) {
    const { uid, password } = request.all()
    //await auth.attempt(email, password)

    return await auth.attempt(uid, password)
  }
  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    auth.user.password = null
    return auth.user
  }
}

module.exports = UserController

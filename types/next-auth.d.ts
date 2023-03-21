// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth' // need this import although it isn't used for [...nextauth].ts; you need the above comment to bypass eslint rules

declare module 'next-auth' {
  interface Session {
    user: {
      email: string
      uid: string
      gid: string
      name: {
        first: string
        last: string
      }
      qualified: string
      admin: boolean
      checkedIn: boolean
      participation: string
      applied_after_limit: boolean
      InPersonCheckIn: boolean
      pickedUpShirt: boolean
    }
  }
  interface User {
    uid: string
    gid: string
    name: {
      first: string
      last: string
    }
    qualified: string
    admin: boolean
    checkedIn: boolean
    participation: string
    applied_after_limit: boolean
    InPersonCheckIn: boolean
    pickedUpShirt: boolean
  }
}

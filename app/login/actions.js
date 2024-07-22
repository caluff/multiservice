'use server'

import {cookies} from 'next/headers'

export async function createCookie(user) {
  const oneDay = 24 * 60 * 60 * 1000
  cookies().set('currentUser', user, {expires: Date.now() - oneDay})
}
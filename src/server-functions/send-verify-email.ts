'use server'

import { action } from '@solidjs/router'

export const doThingAction = action(async (params: any) => {
  //'use server'

  return 'hello'
})

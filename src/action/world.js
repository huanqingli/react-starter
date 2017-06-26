/**
 * Created by Muc on 17/5/26.
 */
export const SAY_WORLD = 'SAY_WORLD'

export const sayWorld = function (payload) {
  return { type: SAY_WORLD, payload }
}

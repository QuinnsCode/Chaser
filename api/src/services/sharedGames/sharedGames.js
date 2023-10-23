import { db } from 'src/lib/db'

export const sharedGames = () => {
  return db.sharedGame.findMany()
}

export const sharedGame = ({ id }) => {
  return db.sharedGame.findUnique({
    where: { id },
  })
}

export const createSharedGame = ({ input }) => {
  return db.sharedGame.create({
    data: input,
  })
}

export const updateSharedGame = ({ id, input }) => {
  return db.sharedGame.update({
    data: input,
    where: { id },
  })
}

export const deleteSharedGame = ({ id }) => {
  return db.sharedGame.delete({
    where: { id },
  })
}

export const SharedGame = {
  players: (_obj, { root }) => {
    return db.sharedGame.findUnique({ where: { id: root?.id } }).players()
  },
  deck: (_obj, { root }) => {
    return db.sharedGame.findUnique({ where: { id: root?.id } }).deck()
  },
  usedCards: (_obj, { root }) => {
    return db.sharedGame.findUnique({ where: { id: root?.id } }).usedCards()
  },
}

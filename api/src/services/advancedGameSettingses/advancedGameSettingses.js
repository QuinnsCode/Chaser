import { db } from 'src/lib/db'

export const advancedGameSettingses = () => {
  return db.advancedGameSettings.findMany()
}

export const advancedGameSettings = ({ id }) => {
  return db.advancedGameSettings.findUnique({
    where: { id },
  })
}

export const createAdvancedGameSettings = ({ input }) => {
  return db.advancedGameSettings.create({
    data: input,
  })
}

export const updateAdvancedGameSettings = ({ id, input }) => {
  return db.advancedGameSettings.update({
    data: input,
    where: { id },
  })
}

export const deleteAdvancedGameSettings = ({ id }) => {
  return db.advancedGameSettings.delete({
    where: { id },
  })
}

export const AdvancedGameSettings = {
  cardList: (_obj, { root }) => {
    return db.advancedGameSettings
      .findUnique({ where: { id: root?.id } })
      .cardList()
  },
}

import { db } from 'src/lib/db'

export const userGameSettingses = () => {
  return db.userGameSettings.findMany()
}

export const userGameSettings = ({ id }) => {
  return db.userGameSettings.findUnique({
    where: { id },
  })
}

export const createUserGameSettings = ({ input }) => {
  return db.userGameSettings.create({
    data: input,
  })
}

export const updateUserGameSettings = ({ id, input }) => {
  return db.userGameSettings.update({
    data: input,
    where: { id },
  })
}

export const deleteUserGameSettings = ({ id }) => {
  return db.userGameSettings.delete({
    where: { id },
  })
}

export const UserGameSettings = {
  customCards: (_obj, { root }) => {
    return db.userGameSettings
      .findUnique({ where: { id: root?.id } })
      .customCards()
  },
  communityCustomCards: (_obj, { root }) => {
    return db.userGameSettings
      .findUnique({ where: { id: root?.id } })
      .communityCustomCards()
  },
  gameSettings: (_obj, { root }) => {
    return db.userGameSettings
      .findUnique({ where: { id: root?.id } })
      .gameSettings()
  },
}

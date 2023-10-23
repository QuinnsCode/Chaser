import { db } from 'src/lib/db'

export const userConnectionSettingses = () => {
  return db.userConnectionSettings.findMany()
}

export const userConnectionSettings = ({ id }) => {
  return db.userConnectionSettings.findUnique({
    where: { id },
  })
}

export const createUserConnectionSettings = ({ input }) => {
  return db.userConnectionSettings.create({
    data: input,
  })
}

export const updateUserConnectionSettings = ({ id, input }) => {
  return db.userConnectionSettings.update({
    data: input,
    where: { id },
  })
}

export const deleteUserConnectionSettings = ({ id }) => {
  return db.userConnectionSettings.delete({
    where: { id },
  })
}

export const UserConnectionSettings = {
  connectionSettings: (_obj, { root }) => {
    return db.userConnectionSettings
      .findUnique({ where: { id: root?.id } })
      .connectionSettings()
  },
}

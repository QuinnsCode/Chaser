import { db } from 'src/lib/db'

export const planechaseCards = () => {
  return db.planechaseCard.findMany()
}

export const planechaseCard = ({ id }) => {
  return db.planechaseCard.findUnique({
    where: { id },
  })
}

export const createPlanechaseCard = ({ input }) => {
  return db.planechaseCard.create({
    data: input,
  })
}

export const updatePlanechaseCard = ({ id, input }) => {
  return db.planechaseCard.update({
    data: input,
    where: { id },
  })
}

export const deletePlanechaseCard = ({ id }) => {
  return db.planechaseCard.delete({
    where: { id },
  })
}

export const PlanechaseCard = {
  image: (_obj, { root }) => {
    return db.planechaseCard.findUnique({ where: { id: root?.id } }).image()
  },
}

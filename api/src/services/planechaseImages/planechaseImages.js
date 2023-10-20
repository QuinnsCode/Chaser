import { db } from 'src/lib/db'

export const planechaseImages = () => {
  return db.planechaseImage.findMany()
}

export const planechaseImage = ({ id }) => {
  return db.planechaseImage.findUnique({
    where: { id },
  })
}

export const createPlanechaseImage = ({ input }) => {
  return db.planechaseImage.create({
    data: input,
  })
}

export const updatePlanechaseImage = ({ id, input }) => {
  return db.planechaseImage.update({
    data: input,
    where: { id },
  })
}

export const deletePlanechaseImage = ({ id }) => {
  return db.planechaseImage.delete({
    where: { id },
  })
}

export const PlanechaseImage = {
  planechaseCard: (_obj, { root }) => {
    return db.planechaseImage
      .findUnique({ where: { id: root?.id } })
      .planechaseCard()
  },
}

export const schema = gql`
  type PlanechaseImage {
    id: String!
    name: String!
    encodedString: String!
    planechaseCard: PlanechaseCard
    planechaseCardId: String
  }

  type Query {
    planechaseImages: [PlanechaseImage!]! @requireAuth
    planechaseImage(id: String!): PlanechaseImage @requireAuth
  }

  input CreatePlanechaseImageInput {
    name: String!
    encodedString: String!
    planechaseCardId: String
  }

  input UpdatePlanechaseImageInput {
    name: String
    encodedString: String
    planechaseCardId: String
  }

  type Mutation {
    createPlanechaseImage(input: CreatePlanechaseImageInput!): PlanechaseImage!
      @requireAuth
    updatePlanechaseImage(
      id: String!
      input: UpdatePlanechaseImageInput!
    ): PlanechaseImage! @requireAuth
    deletePlanechaseImage(id: String!): PlanechaseImage! @requireAuth
  }
`

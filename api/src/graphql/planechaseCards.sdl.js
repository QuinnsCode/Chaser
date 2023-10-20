export const schema = gql`
  type PlanechaseCard {
    id: String!
    name: String!
    image: PlanechaseImage
    plane: String!
    abilityDescription: String!
    chaosAbilityDescription: String!
    planechaseImageId: String
  }

  type Query {
    planechaseCards: [PlanechaseCard!]! @requireAuth
    planechaseCard(id: String!): PlanechaseCard @requireAuth
  }

  input CreatePlanechaseCardInput {
    name: String!
    plane: String!
    abilityDescription: String!
    chaosAbilityDescription: String!
    planechaseImageId: String
  }

  input UpdatePlanechaseCardInput {
    name: String
    plane: String
    abilityDescription: String
    chaosAbilityDescription: String
    planechaseImageId: String
  }

  type Mutation {
    createPlanechaseCard(input: CreatePlanechaseCardInput!): PlanechaseCard!
      @requireAuth
    updatePlanechaseCard(
      id: String!
      input: UpdatePlanechaseCardInput!
    ): PlanechaseCard! @requireAuth
    deletePlanechaseCard(id: String!): PlanechaseCard! @requireAuth
  }
`

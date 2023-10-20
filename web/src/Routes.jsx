// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="PlanechaseCards" titleTo="planechaseCards" buttonLabel="New PlanechaseCard" buttonTo="newPlanechaseCard">
        <Route path="/planechase-cards/new" page={PlanechaseCardNewPlanechaseCardPage} name="newPlanechaseCard" />
        <Route path="/planechase-cards/{id}/edit" page={PlanechaseCardEditPlanechaseCardPage} name="editPlanechaseCard" />
        <Route path="/planechase-cards/{id}" page={PlanechaseCardPlanechaseCardPage} name="planechaseCard" />
        <Route path="/planechase-cards" page={PlanechaseCardPlanechaseCardsPage} name="planechaseCards" />
      </Set>
      <Set wrap={ScaffoldLayout} title="PlanechaseImages" titleTo="planechaseImages" buttonLabel="New PlanechaseImage" buttonTo="newPlanechaseImage">
        <Route path="/planechase-images/new" page={PlanechaseImageNewPlanechaseImagePage} name="newPlanechaseImage" />
        <Route path="/planechase-images/{id}/edit" page={PlanechaseImageEditPlanechaseImagePage} name="editPlanechaseImage" />
        <Route path="/planechase-images/{id}" page={PlanechaseImagePlanechaseImagePage} name="planechaseImage" />
        <Route path="/planechase-images" page={PlanechaseImagePlanechaseImagesPage} name="planechaseImages" />
      </Set>
      <Set wrap={DefaultLayout}>
        {/* <Route path="/about" page={AboutPage} name="about" /> */}
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/game" page={GamePage} name="game" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

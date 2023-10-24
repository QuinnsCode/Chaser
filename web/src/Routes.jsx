// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="AdvancedGameSettingses" titleTo="advancedGameSettingses" buttonLabel="New AdvancedGameSettings" buttonTo="newAdvancedGameSettings">
        <Route path="/advanced-game-settingses/new" page={AdvancedGameSettingsNewAdvancedGameSettingsPage} name="newAdvancedGameSettings" />
        <Route path="/advanced-game-settingses/{id}/edit" page={AdvancedGameSettingsEditAdvancedGameSettingsPage} name="editAdvancedGameSettings" />
        <Route path="/advanced-game-settingses/{id}" page={AdvancedGameSettingsAdvancedGameSettingsPage} name="advancedGameSettings" />
        <Route path="/advanced-game-settingses" page={AdvancedGameSettingsAdvancedGameSettingsesPage} name="advancedGameSettingses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="SharedGames" titleTo="sharedGames" buttonLabel="New SharedGame" buttonTo="newSharedGame">
        <Route path="/shared-games/new" page={SharedGameNewSharedGamePage} name="newSharedGame" />
        <Route path="/shared-games/{id}/edit" page={SharedGameEditSharedGamePage} name="editSharedGame" />
        <Route path="/shared-games/{id}" page={SharedGameSharedGamePage} name="sharedGame" />
        <Route path="/shared-games" page={SharedGameSharedGamesPage} name="sharedGames" />
      </Set>
      <Set wrap={ScaffoldLayout} title="UserGameSettingses" titleTo="userGameSettingses" buttonLabel="New UserGameSettings" buttonTo="newUserGameSettings">
        <Route path="/user-game-settingses/new" page={UserGameSettingsNewUserGameSettingsPage} name="newUserGameSettings" />
        <Route path="/user-game-settingses/{id}/edit" page={UserGameSettingsEditUserGameSettingsPage} name="editUserGameSettings" />
        <Route path="/user-game-settingses/{id}" page={UserGameSettingsUserGameSettingsPage} name="userGameSettings" />
        <Route path="/user-game-settingses" page={UserGameSettingsUserGameSettingsesPage} name="userGameSettingses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="UserConnectionSettingses" titleTo="userConnectionSettingses" buttonLabel="New UserConnectionSettings" buttonTo="newUserConnectionSettings">
        <Route path="/user-connection-settingses/new" page={UserConnectionSettingsNewUserConnectionSettingsPage} name="newUserConnectionSettings" />
        <Route path="/user-connection-settingses/{id}/edit" page={UserConnectionSettingsEditUserConnectionSettingsPage} name="editUserConnectionSettings" />
        <Route path="/user-connection-settingses/{id}" page={UserConnectionSettingsUserConnectionSettingsPage} name="userConnectionSettings" />
        <Route path="/user-connection-settingses" page={UserConnectionSettingsUserConnectionSettingsesPage} name="userConnectionSettingses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
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
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/game" page={GamePage} name="game" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

import { useRoutes, Navigate } from "react-router-dom"
import LandingPageLayout from "../layout/landingPageLayout/LandingPageLayout.jsx"
import Home from "../pages/landingPage/home/Home.jsx"
import About from "../pages/landingPage/about/About.jsx"
import NotFound from "../pages/landingPage/NotFound.jsx"
import {
    ABOUT,
    HOME,
    NOTFOUND,
    APP,
    SIGNIN,
    AUTH,
    SIGNUP,
    FORGOT_PASSWORD,
    SIGNUP_OTP,
    CARDS,
    CONTACTS,
    PEOPLE,
    ACCOUNT
} from "./RoutesConstant.js"
import AppLayout from "../layout/appLayout/AppLayout.jsx"
import AuthLayout from "../layout/authLayout/AuthLayout.jsx"
import Signin from "../pages/authPage/signin/Signin.jsx"
import CreateAcct from "../pages/authPage/signup/CreateAcct.jsx"
import ForgotPassword from "../pages/authPage/signup/ForgotPassword.jsx"
import SignupOtp from "../pages/authPage/signup/SignupOtp.jsx"
import Cards from "../pages/appPage/cards/Cards.jsx"
import Contacts from "../pages/appPage/contacts/Contacts.jsx"
import People from "../pages/appPage/people/People.jsx"
import Account from "../pages/appPage/account/Account.jsx"

export default function Router() {
    return useRoutes([
        {
            path: HOME,
            element: <LandingPageLayout />,
            children: [
                {
                    path: HOME,
                    element: <Home />
                },
                {
                    path: ABOUT,
                    element: <About />
                },
                {
                    path: NOTFOUND,
                    element: <NotFound />
                },
            ]
        },
        {
            path: APP,
            element: <AppLayout />,
            children: [
                {
                    path: CARDS,
                    element: <Cards />
                },
                {
                    path: CONTACTS,
                    element: <Contacts />
                },
                {
                    path: PEOPLE,
                    element: <People />
                },
                {
                    path: ACCOUNT,
                    element: <Account />
                },
                {
                    path: '*', element: <Navigate to={`/${NOTFOUND}`} replace />
                }
            ]
        },
        {
            path: AUTH,
            element: <AuthLayout />,
            children: [
                {
                    path: SIGNIN,
                    element: <Signin />
                },
                {
                    path: SIGNUP,
                    element: <CreateAcct />
                },
                {
                    path: FORGOT_PASSWORD,
                    element: <ForgotPassword />
                },
                {
                    path: SIGNUP_OTP,
                    element: <SignupOtp />
                },
                {
                    path: NOTFOUND, element: <NotFound />
                },
                {
                    path: '*', element: <Navigate to={`/${NOTFOUND}`} replace />
                }
            ]
        },
        { path: '*', element: <NotFound /> }
    ])
}

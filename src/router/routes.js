import TaskPage from "../pages/TasksPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import RegisterPage from "../pages/RegisterPage.vue"
import SummaryPage from "../pages/SummaryPage.vue"
import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue"

const routes = [
    {
        path: "/tasks",
        component: TaskPage,
        name: 'tasks',
        meta: {
            auth:true
        }
    },
    {
        path: "/login",
        component: LoginPage,
        name: 'login'
    },
    {
        path: "/",
        component: LoginPage,
        name: 'login'
    },
    {
        path: "/register",
        component: RegisterPage,
        name: 'register'
    },
    {
        path: "/summary",
        component: SummaryPage,
        name: 'summary',
        meta: {
            auth: true
        }
    },
    {
        path: "/:notFoung(.*)",
        component: NotFoundErrorPage,
        name: 'error.404'
    }
]

export default routes
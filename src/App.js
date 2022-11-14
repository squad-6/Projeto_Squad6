
import { createBrowserRouter } from 'react-router-dom'


import Cadastroescola from './pages/Cadastroescola/cadastroescola'
import Cadastroparceiros from './pages/Cadastroparceiros/cadastroparceiros'
import Dashboard from './pages/Dashboard/dashboard'
import Doacao from './pages/Doacao/doacao'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Parceiros from './pages/Parceiros/parceiros'
import Quemsomos from './pages/Quemsomos/quemsomos'
import Quest from './pages/Quest/quest'
import Error from './pages/Error/error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/cadastro-escola',
        element: <Cadastroescola/>
    },
    {
        path: '/cadastro-parceiros',
        element: <Cadastroparceiros/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/doacao',
        element: <Doacao/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/parceiros',
        element: <Parceiros/>
    },
    {
        path: '/quem-somos',
        element: <Quemsomos/>
    },
    {
        path: '/questionario',
        element: <Quest/>
    },
    {
        path: '*',
        element: <Error/>
    }

])

export { router }; 
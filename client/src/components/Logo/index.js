import './logo.css'
import { Link } from 'react-router-dom'
export function Logo() {
    return (
        <Link to="/">
            <h1 className='logo'>Acesso<span className='logo-text'>Escola</span></h1>
        </Link>
    )
}
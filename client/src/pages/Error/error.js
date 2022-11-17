import './error.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import { MemoryRouter } from 'react-router-dom'

export default function Error() {
    return (
        <div className='tela-error'>
            <div className='error'>
                <Logo />
                <h1>Página não escontrada!!</h1>
                <p>Esta página que está procurando não existe.</p>
                <MemoryRouter>

                    <Link className='link' to="/">
                        Voltar para Home
                    </Link>
                </MemoryRouter>

            </div>
        </div>
    )
}


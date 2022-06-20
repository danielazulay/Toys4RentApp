import { useState } from "react";
import FormInput from '../../components/FormInput/FormInput'
import userServices from "../../services/UserServices";
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import './Login.css'
function Login() {

    const history = useNavigate()
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const [hasError, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState()

    function handleChange(e) {

        setState({ ...state, [e.currentTarget.name]: e.currentTarget.value })
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault()
            const resp = await userServices.login(state)
            if (resp) {
                console.log(resp)
                localStorage.setItem('logado', JSON.stringify({ ...state.data }))
                history('/')
                setError(false)
                setErrorMsg('')
            }

        } catch (err) {
            console.log(err.response.data)
            setError(true)
            setErrorMsg(err.response.data)


        }
    }
    return (
        <>
            <h2 className="titlepage">Login</h2>
            <form onSubmit={handleSubmit} id="login-form">
                <FormInput
                    label='Email'
                    name='email'
                    type='string'
                    value={state.email}
                    onChange={handleChange}

                />
                <FormInput
                    label='Password'
                    name='password'
                    type='password'
                    value={state.password}
                    onChange={handleChange}
                />



                <Button variant="primary" type='submit' id='buttonlog'>SignIn</Button>
            </form>



            <>
                {hasError && [

                    'danger'

                ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                        {
                            <h3>{errorMsg}</h3>


                        }
                    </Alert>
                ))}
            </>
        </>
    )


}

export default Login

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import toyService from '../../services/ToyServices'
import FormInput from '../../components/FormInput/FormInput'
import { useNavigate, Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import './FormToy.css'
function FormToys() {

    const history = useNavigate()
    const [state, setState] = useState({
        name: '',
        value: '',
        credits: '',
        pieces: '',
        units: '',
        description: '',
        url: ''
    })

    const [hasError, setError] = useState()
    const [errorMsg, setErrorMsg] = useState()
    const [validated, setValidated] = useState(false);


    function handleChange(event) {

        setState({ ...state, [event.currentTarget.name]: event.currentTarget.value })
    }

    async function handleSubmit(event) {
        try {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {

                const resposta = await toyService.newToy(state)
                history('/')
                setError(false)
                setErrorMsg('')
            }
            setValidated(true);

        } catch (err) {
            setError(true)
            for (let i = 0; i < err.response.data.length; i++) {

                setErrorMsg(err.response.data[i])
            }
        }

    }

    return (
        <>
            <h2 className="titlepage">New Toy</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} id="form-toy">
                <FormInput name='name' type='string' label='Name' value={state.name} onChange={handleChange} />
                <FormInput name='value' type='number' label='Value' value={state.value} onChange={handleChange} />
                <FormInput name='credits' type='number' label='Credits' value={state.credits} onChange={handleChange} />
                <FormInput name='pieces' type='number' label='Pieces' value={state.pieces} onChange={handleChange} />
                <FormInput name='units' type='number' label='Units' value={state.units} onChange={handleChange} />
                <FormInput name='description' type='string' label='Description' value={state.description} onChange={handleChange} />
                <FormInput name='url' type='string' label='Url' value={state.url} onChange={handleChange} />
                <div className='button'>
                    <Link to='/alltoys'><Button variant="primary" >Return</Button></Link>
                    <Button variant="primary" type='submit' >Save</Button>
                </div>
            </Form>

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
    )

}

export default FormToys

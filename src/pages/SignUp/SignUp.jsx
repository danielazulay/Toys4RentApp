import { useState } from 'react'
import FormInput from '../../components/FormInput/FormInput'
import { Row, Col, Toast, Button } from 'react-bootstrap'
import userServices from '../../services/UserServices'
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import './SignUp.css'


function SignUp() {

    const history = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
        number: '',
        birthDate: '',
        phoneNumber: '',
        street: '',
        neighbourhood: '',
        district: '',
        city: '',
        postalCode: '',
    })

    const [hasError, setHasError] = useState(false)

    const [errorMsg, setErrorMsg] = useState()


    function handleChange(event) {

        setForm({
            ...form, [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const mapData = () => {

        let address = { street: form.street, number: form.number, neighbourhood: form.neighbourhood, district: form.district, city: form.city, postalCode: form.postalCode }
        let data = form
        data.address = address;
        data.birthDate = data.birthDate
        data.number = Number(data.number)
        /*  delete data.street;
         delete data.neighbourhood;
         delete data.district;
         delete data.city;
         delete data.postalCode;
         delete data.number; */
        return data
    }


    async function handleSubmit(e) {

        try {

            e.preventDefault()

            const resposta = await userServices.createUser(mapData())
            console.log(resposta)
            if (resposta) {
                history('/')
                console.log(resposta)
                setHasError(false)
                setErrorMsg('')
            }


        } catch (err) {

            setHasError(true)
            for (let i = 0; i < err.response.data.length; i++) {

                setErrorMsg(err.response.data[i])
            }
        }

    }

    return (


        <>
            {console.log(errorMsg)}
            <h2 className="titlepage">SignUp</h2>
            <form onSubmit={handleSubmit} className="form-singup">
                <Row>
                    <Col >
                        <FormInput name='email' type='string' label='Email' value={form.email} onChange={handleChange} />
                        <FormInput name='password' type='password' label='Password' value={form.password} onChange={handleChange} />
                        <FormInput name='name' type='string' label='Name' value={form.name} onChange={handleChange} />
                        <FormInput name='lastName' type='string' label='LastName' value={form.lastName} onChange={handleChange} />
                        <FormInput name='number' type='string' label='Number' value={form.number} onChange={handleChange} />
                        <FormInput name='birthDate' type='date' label='BirthDate' value={form.birthDate} onChange={handleChange} />
                    </Col>
                    <Col>
                        <FormInput name='phoneNumber' type='string' label='PhoneNumber' value={form.phoneNumber} onChange={handleChange} />
                        <FormInput name='street' type='string' label='street' value={form.street} onChange={handleChange} />
                        <FormInput name='neighbourhood' type='string' label='Neighbourhood' value={form.neighbourhood} onChange={handleChange} />
                        <FormInput name='district' type='string' label='District' value={form.district} onChange={handleChange} />
                        <FormInput name='city' type='string' label='City' value={form.city} onChange={handleChange} />
                        <FormInput name='postalCode' type='string' label='PostalCode' value={form.postalCode} onChange={handleChange} />

                    </Col>
                </Row>
                <Button variant="primary" type='submit' id="btn-submit">Sign Up</Button>

            </form>




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

export default SignUp

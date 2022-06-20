import { useState, useEffect } from 'react'
import { Params, useParams, Link } from 'react-router-dom'
import toyService from '../../services/ToyServices'
import FormInput from '../../components/FormInput/FormInput'
import { Button } from 'react-bootstrap'

import ProductCard from '../../components/ProductCard/ProductCard'
import './EditToy.css'

function EditToy() {

    const { id } = useParams()

    const [state, setState] = useState({
        name: '',
        value: '',
        credits: '',
        pieces: '',
        units: '',
        description: ''
    })

    useEffect(async () => {
        const resposta = await toyService.getToy(id)
        console.log(resposta.data)
        setState({ ...resposta.data })

    }, [id])


    function handleChange(event) {
        if (event.currentTarget.value.length > 21) {
            alert('cant use more the 21 cacaters')
        } else {
            setState({ ...state, [event.currentTarget.name]: event.currentTarget.value })
        }


    }

    async function handleSubmit(event) {
        try {
            event.preventDefault()
            const resposta = await toyService.editToy(id, state)
            console.log(resposta.data)

        } catch (err) {
            console.log(err)
        }

    }


    return (
        <div>
            <h2 className="titlepage">Edit</h2>
            <p clasName='detailEdit'>ID {id} <br /> Name: {state.name}</p >
            <div id="allBlocks">
                <div id="block1">
                    <form onSubmit={(event) => { handleSubmit(event) }} id="edit-form">
                        <FormInput name='name' type='string' label='Name' value={state.name} onChange={handleChange} />
                        <FormInput name='value' type='number' label='Value' value={state.value} onChange={handleChange} />
                        <FormInput name='credits' type='number' label='Credits' value={state.credits} onChange={handleChange} />
                        <FormInput name='pieces' type='number' label='Pieces' value={state.pieces} onChange={handleChange} />
                        <FormInput name='units' type='number' label='Units' value={state.units} onChange={handleChange} />
                        <FormInput name='description' type='string' label='Description' value={state.description} onChange={handleChange} />
                        <FormInput name='url' type='string' label='Url' value={state.url} onChange={handleChange} />

                        <Button variant="primary" type='submit' >Save</Button>
                        <Link to='/alltoys'><Button variant="primary">Return</Button></Link>
                    </form>

                </div>
                <div className="buttonEdit">




                </div>
                <div id='block2'>
                    <ProductCard imgUrl={state.url} value={state.value} key={state._id} description={state.description} name={state.name} id={state._id} />
                </div>
            </div>
        </div >
    )

}

export default EditToy

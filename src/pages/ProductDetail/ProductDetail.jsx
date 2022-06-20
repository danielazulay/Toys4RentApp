import toyService from "../../services/ToyServices"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductCard from '../../components/CardDetail/CardDetail'
function ProductDetailed() {

    const { id } = useParams()
    const [state, setState] = useState({
        title: '',
        description: ''
    })

    useEffect(async () => {
        try {
            const resposta = await toyService.getToy(id)
            setState({ ...resposta.data })
            console.log(resposta.data)
        } catch (err) {
            console.log(err)
        }
    }, []);



    return (<div>
        <ProductCard name={state.name} description={state.description} url={state.url} />

    </div>)

}

export default ProductDetailed
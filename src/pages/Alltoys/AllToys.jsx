import './Alltoys.css'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import toyServices from '../../services/ToyServices'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loading from '../../components/Loading/Loading'

function AllToys() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(async () => {
        if (search === '' || search.length >= 3) {
            getData()
        }

    }, [search])

    async function getData() {
        const resposta = await toyServices.allToys(search)
        setIsLoading(false)
        setData(resposta.data)
        console.log(resposta.data)
    }


    async function handleDelete(id) {

        const resposta = await toyServices.deleteToy(id)

    }


    if (isLoading) {
        return (

            <Loading />
        )
    }
    /*    if (data.length === 0) {
           return (
               <div className='text-center mt-5'>
                   <p>It was not possible to find any product at the moment !!</p>
               </div>
           )
       } */
    return (
        <div >

            <div className="search-bar mb-3">
                <Form.Control size="lg" type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Search by toy name" />
            </div>
            <h2 className="titlepage">Toys</h2>
            <div className='block'>
                <div className='list'>
                    {data.map((a) => {
                        return (
                            <ProductCard imgUrl={a.url} value={a.value} key={a._id} description={a.description} name={a.name} id={a._id} />
                        )

                    })
                    }
                </div>
            </div>


        </div>


    )

}

export default AllToys
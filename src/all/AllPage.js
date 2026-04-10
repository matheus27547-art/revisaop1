import React, { useEffect } from 'react'
import api from '../utils/api'


const AllPage = props => {
    const [listaProdutos, setProducts] = React.useState([])

    const loadProducts = () => {
        api.get('/products')
            .then(res => setProducts(res.data))
    }

    useEffect(() => {
        loadProducts()
    }, [])

    const handleDelete = id => {
        api.delete(`/products/${id}`)
            .then(res => loadProducts())
    }



  return (
    <div>
        <tabel>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                {listaProdutos.map(p => (
                        <tr key={p.id}>
                        <td>{p.nome}</td>
                        <td>{p.descricao}</td>
                        <td>{p.preco}</td>
                        <td>X</td>
                    </tr>
                ))}
            </tbody>
        </tabel>
    </div>
  )
}

AllPage.propTypes = {}

export default AllPage

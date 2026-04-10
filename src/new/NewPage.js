import React from 'react'

import Button from './components/Button';

import api from '../utils/api';


const NewPage = props => {
  const [form,setForm] = React.useState({nome:"", descricao:"", preco:""})

  const handleChange = e => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    api.post("/products", form)
      .then(data => setForm({nome:"", descricao:"", preco:""}))
  }


  return (
    <div>
        <h1>Novo produto</h1>
        <form>
            <input label="Nome" id="nome" name="nome" value={form.nome} onChange={handleChange}/>
            <input label="Descrição" id="descricao" name="descricao" value={form.descricao} onChange={handleChange}/>
            <input label="Preço" id="preco" name="preco" value={form.preco} onChange={handleChange}/>
            <hr/>
            <Button onClick={handleSubmit}>
                Submeter produto
            </Button>
        </form>
    </div>
  )
}

NewPage.propTypes = {}

export default NewPage
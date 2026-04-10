import React from 'react'
import PropTypes from 'prop-types'
import Button from './components/Button';
import Input from './components/Input';


const NewPage = props => {
  return (
    <div>
        <h1>Novo produto</h1>
        <form>
            <input label="Nome" id="name" name="name" onChange={""}/>
            <input label="Descrição" id="description" name="description" onChange={""}/>
            <input label="Preço" id="price" name="price" onChange={""}/>
            <hr/>
            <Button onClick={""}>
                Submeter produto
            </Button>
        </form>
    </div>
  )
}

NewPage.propTypes = {}

export default NewPage
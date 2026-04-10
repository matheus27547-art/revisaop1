import React from 'react'
import PropTypes from 'prop-types'

const NewPage = props => {
  return (
    <div>
        <h1>Novo produto</h1>
        <form>
            <input label="Nome" id="name" name="name" onChange={""}/>
            <input label="Descrição" id="description" name="description" onChange={""}/>
            <input label="Preço" id="price" name="price" onChange={""}/>
            <hr/>
            <button onClick={""}>
                Submeter produto
            </button>
        </form>
    </div>
  )
}

NewPage.propTypes = {}

export default NewPage
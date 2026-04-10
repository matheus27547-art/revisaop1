import React from 'react'
import PropTypes from 'prop-types'
';

const AllPage = props => {
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
                <tr>
                    <td>Nome</td>
                    <td>Descrição</td>
                    <td>Preço</td>
                    <td>X</td>
                </tr>
            </tbody>
        </tabel>
    </div>
  )
}

AllPage.propTypes = {}

export default AllPage
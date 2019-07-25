import React from 'react'
import Noticia from './Noticia';
import PropTypes from 'prop-types'
const ListaNoticias = ({articles}) => (
    <div className="row">
        {
            articles.map( (article, index) => <Noticia key={index} article={article} /> )
        }
    </div>
)
 
ListaNoticias.propTypes = {
    articles: PropTypes.array.isRequired
}
export default ListaNoticias;
import React from 'react'
import PropTypes from 'prop-types'

const Noticia = ({article}) => {

    // extraer los datos
    const { urlToImage, url, title, description, source } = article

    const imagen = urlToImage ? 
            <div className="card-image">
            <img src={urlToImage} alt="imagen" />
            <span className="card-title">{source.name}</span>
            </div>
        : ''

    return(
        <div className="col s12 m6 l4">
            <div className="card">
                    { imagen }
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank"  rel="noopener noreferrer" className="waves-effect waves-light btn"> Noticia completa</a>
                </div>
            </div>
        </div>
    )   
}

Noticia.propTypes = {
    article: PropTypes.object.isRequired
}

export default Noticia
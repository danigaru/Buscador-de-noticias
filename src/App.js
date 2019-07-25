import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    this.getArticles() 
  }

  getArticles = async (category = 'general') => {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=your_api_key`

    try {

      const response = await fetch(url)
      const noticias = await response.json()

      if( noticias.status === 'ok') {

      }
      this.setState({
        articles: noticias.articles
      })

    }catch(e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias React Api" />

        <div className="container white contenedor-noticias" >

          <Formulario getArticles={this.getArticles} />

          <ListaNoticias articles={this.state.articles} />
        </div>
      </Fragment>
    )
  }
}
// 354968930ffd4051bf7892cd6631c3d0

export default App
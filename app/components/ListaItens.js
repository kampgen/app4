import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native'
import axios from 'axios'
import Itens from './Itens'

export default class ListaItens extends Component {
	constructor(props) {
		super(props)

		this.state = { listaItens: []
		}
	}

	componentWillMount() {
	//http://faus.com.br/recursos/c/dmairr/api/itens.html
	axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
	.then(response => {this.setState({listaItens: response.data}), console.log(response)})
	.catch(() => {console.log('erro')})
	}

	render() {
		return(
			<ScrollView style={{backgroundColor: '#DDD'}}>
				{this.state.listaItens.map(item => {return (<Itens key={item.titulo} item={item} />)})}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({

})

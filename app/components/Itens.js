import React, { Component } from 'react'
import {
	Text,
	StyleSheet,
	View,
	Image
} from 'react-native'

export default class Itens extends Component {
	render() {
		return(
			<View style={styles.containerItem}>
				<View style={styles.containerImg}>
				<Image style={styles.imageItem} source={{uri: this.props.item.foto}}/>
				</View>
			<View style={styles.infoItem}>
				<Text style={{fontSize: 20, fontWeight: 'bold', color: 'blue'}}>{this.props.item.titulo}</Text>
				<Text style={{fontWeight: 'bold', fontSize: 18}}>R$ {this.props.item.valor}</Text>
				<Text style={styles.txtDetalhes}>Local: {this.props.item.local_anuncio}</Text>
				<Text>Data publicação: {this.props.item.data_publicacao}</Text>
			</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerItem: {
		borderWidth: 1,
		borderColor: 'grey',
		padding: 10,
		margin: 10,
		flexDirection: 'row',
		backgroundColor: '#FFF'
	},
	containerImg: {
		width: 82,
		height: 82
	},
	imageItem: {
		height: 80,
		width: 80,
		borderWidth: 2,
		borderColor: 'lightgrey'
	},
	infoItem: {
		flex: 1,
		marginLeft: 20
	},
	txtDetalhes: {
		fontSize: 16
	}
})

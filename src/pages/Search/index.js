import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import axios from 'axios';
const url = 'http://localhost:4000/spotlist'


export default class ListaItens extends Component {


	constructor(props) {
		super(props);

		this.state = { listaItens: [] };
	}

	async UNSAFE_componentWillMount() {
		//requisção HTTP
		const api = axios.create({
			baseURL: "http://localhost:4000/"
		})

		const response = await api.get("spotlist");
		this.state = { listaItens: response.data };

	}


	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<TextInput
						style={styles.input}
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Buscar postos"
						underlineColorAndroid="transparent"
					/>
					{this.state.listaItens.map(item => (<Text style={styles.lista}
						key={item.id}>{item._id}


					</Text>))}
				</ScrollView>
			</View>
		);
	}
}
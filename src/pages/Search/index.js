import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TextInput, ScrollView } from 'react-native';
import styles from './styles';
import Header from '~/components/Header';
import axios from 'axios';

const url = 'http://localhost:4000/spotlist'

const Search = () => (
	<View>
		<Header title="Lista de postos" />
	</View>
);

export default Search;


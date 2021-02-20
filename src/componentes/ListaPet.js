import React,{ Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import DetallePet from './DetallePet';

class ListaPet extends Component{
    state = { listaPet:[] };

    componentDidMount(){
        axios.get("http://192.168.0.7:8080/Mascotas/webresources/mascotas.mascotas")
        .then(response => {
            this.setState({listaPet: response.data });
        })
        .catch(error => {
            console.log('error consola de tipo '+error);
        });
        
    }
    listaAMostrar = () => {
        return this.state.listaPet.map(pet => {
            return <DetallePet  pet={pet}></DetallePet>

        })

    };

    render(){
       console.log(this.state);
       return <ScrollView>{this.listaAMostrar()}</ScrollView>; 
    } 
}

export  default ListaPet;

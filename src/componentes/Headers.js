//importar
import React from 'react';
import {View,Text, ImageBackground} from 'react-native';

//cuerpo 
const Header = (prost) => {
    const {estiloTexto, estiloView} = styles;
    return(
        <View style={estiloView}>
            <Text style={estiloTexto}>{prost.titulo} </Text>
        </View>
    ); 
}
//estilo 

const styles = {
    estiloTexto: {
      fontSize: 40,
      color: 'black'
    },
    estiloView: {
        borderRadius: 0,
        borderWidht:0,
        alignItems: 'center',
        backgroundColor: 'green',
        paddingTop: 15,
        paddingBottom: 15
    }
  };
  

//exportar
export default Header;
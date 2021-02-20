import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Button from './Button';


const DetallePet = (props) => {

    return (
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                    <Text style={styles.estiloTexto}>Raza: {props.pet.raza} </Text>
                    <Text style={styles.estiloTexto}>nombre: {props.pet.nombre} </Text>
                </View>
            </ItemSeccion>
            <ItemSeccion>
                <Image style={styles.estiloImagen}
                    
                    source={{
                        uri: props.pet.imagen
                    }}
                />
            </ItemSeccion>
            <ItemSeccion>
                <Button botonPresionado ={() => {Linking.openURL(props.pet.informacion); }} />
            </ItemSeccion>
        </Item>
    );

};

const styles = {
    estiloContenedor:{
        flexDirection: "column",
        justifyContent: "space-between"
    },
    estiloImagen:{
        height:300,
    },
    estiloTexto:{
        fontSize: 18,
        fontWeight: '200',
        textTransform: 'uppercase',
        color: 'black'
    }
    
}

export default DetallePet;
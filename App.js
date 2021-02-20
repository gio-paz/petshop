/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 //importar componentes y librerias requeridas
 import React from 'react';
 import {View} from 'react-native';
 import Header from './src/componentes/Headers';
 import ListaPet from './src/componentes/ListaPet';
 //import {ListAuto} from './src/componentes/ListAuto';
 
 //cuerpo del componente
 const App = () => {
   return (
     <>
     <View style={styles.estiloContenedor} >
       <Header titulo={'PET SHOP CANINOS'} />
       <ListaPet/>
     </View>
     </>
   );
 };
 
 const styles={
   estiloContenedor:{
     flex: 1,
     backgroundColor: '#C2BDD8'
   }
 }
 //exportar el componente 
 export default App;
 
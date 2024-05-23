
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Button, TextInput } from "react-native";
import Footer from "../components/Footer";
import FooterAdm from "../components/FooterAdm";


interface Filme {
  id: string;
  titulo: string;
  diretor: string;
  genero: string;
  dt_lancamento: string;
  sinopse: string;
  elenco: string;
  classificacao: string;
  plataformas: string;
  duracao: string;
}

const Listagem4: React.FC = () => {
  const [pesquisa, setPesquisa] = useState<string>("");
  const [filmes, setFilmes] = useState<any[]>([]);
  const [elementVisible, setElementVisible] = useState(false);

  useEffect(() => {
    ListagemFilmes();
  }, []);

  const ListagemFilmes = async () => {
    try {
      if(pesquisa != ""){
        const response = await axios.get('http://10.137.11.213/api/filmes/pesquisar/'+pesquisa);
        setFilmes(response.data.data);
      } else { 
      const response = await axios.get('http://10.137.11.213/api/filmes/listagem');
      setFilmes(response.data.data);
      }
   // console.log(filmes)
    } catch (error) {
      console.log(error);
    }
  }

  const renderItem = ({ item }: { item: Filme }) => (
    <View style={styles.item} key={item.id}>
      <Text style={styles.nameText}>{item.titulo}</Text>
      <Text style={styles.text}>{item.genero}</Text>
      <Text style={styles.numbertext}>{item.dt_lancamento}</Text>
      <Text style={styles.text}>{item.classificacao}</Text>
      {elementVisible ? ( 
        <View >
      <Text style={styles.text}>{item.diretor} </Text>
      <Text style={styles.text}>{item.sinopse}</Text>
      <Text style={styles.text}>{item.elenco}</Text>
      <Text style={styles.text}>{item.plataformas}</Text>
      <Text style={styles.numbertext}>{item.duracao}</Text>
      </View >
      ) : null} 
           
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image source={require('../assets/images/logo.png')} style={styles.Logo} />
        </TouchableOpacity>
        
        <View>
        <TextInput style={styles.pesquisa} placeholder="Pesquisar"  onChangeText={setPesquisa} ></TextInput>
        <TouchableOpacity  onPress={ListagemFilmes}><Text>Pesquisar</Text></TouchableOpacity>
      </View>
      </View>

      <View style={styles.flat}>
      <FlatList
        data={filmes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} 
      />
</View>
      <FooterAdm/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
  item: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginStart: 110,
    marginTop: 10
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    height: 50,
    width: 50,
    left: 180,
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
},
    numbertext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
},
  Logo: {
    height: 150,
    width: 300,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  flat:{
    marginTop:70
  },
  pesquisa:{
borderWidth:1,
borderRadius:20,
height:50,
width:380,
marginLeft:'auto',
marginRight:'auto'  }
});

export default Listagem4;
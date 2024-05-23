
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Footer from "../components/Footer";
import FooterAdm from "../components/FooterAdm";

interface Serie {
  id: string;
  titulo: string;
  diretor: string;
  studio: string;
  genero: string;
  dt_lancamento: string;
  sinopse: string;
  elenco: string;
  classificacao: string;
  plataformas: string;
  episodios: string;
}

const ListagemSerie: React.FC = () => {
  const [serie, setSerie] = useState<Serie[]>([]);
  const [elementVisible, setElementVisible] = useState<string | null>(null);

  useEffect(() => {
    ListagemSerie();
  }, []);

  const ListagemSerie = async () => {
    try {
      const response = await axios.get('http://10.137.11.213:8000/api/series/listagem');
      if (response.status === 200) {
        setSerie(response.data.data);
        console.log(serie);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Delete = async (id: number) => {
    axios.delete('http://10.137.11.213:8000/api/series/delete/' + id).then(function (response) {}
    ).catch(function (error) {
    console.log(error)
  })
}

  const renderItem = ({ item }: { item: Serie }) => (
    <View style={styles.item} key={item.id}>
      <Text style={styles.nameText}>{item.titulo}</Text>
      <Text style={styles.text}>{item.genero}</Text>
      <Text style={styles.numbertext}>{item.dt_lancamento}</Text>
      <Text style={styles.text}>{item.classificacao}</Text>
      {elementVisible === item.id && ( 
        <View >
      <Text style={styles.text}>{item.diretor} </Text>
      <Text style={styles.text}>{item.sinopse}</Text>
      <Text style={styles.text}>{item.elenco}</Text>
      <Text style={styles.text}>{item.plataformas}</Text>
      <Text style={styles.numbertext}>eps{item.episodios}</Text>
      <TouchableOpacity onPress={() => Delete(item.id)}>
      <Image source={require('../assets/images/trash.png')}style={styles.trash}/>
      </TouchableOpacity>
      </View >
      )} 
          <TouchableOpacity onPress={() =>
          setElementVisible(elementVisible === item.id ? null : item.id)} > 
          <Image source={require('../assets/images/arrow.png')} style={styles.button} />
        </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Image source={require('../assets/images/logo.png')} style={styles.Logo} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={serie}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} 
        horizontal
      />

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
  trash: {
    height: 50,
    width: 50,
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
});

export default ListagemSerie;

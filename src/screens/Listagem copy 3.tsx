
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Footer from "../components/Footer";
import FooterAdm from "../components/FooterAdm";
import { ScrollView } from "react-native-gesture-handler";


// interfaces
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

interface Animacao {
  id: string;
  titulo: string;
  diretor: string;
  studio: string;
  genero: string;
  dt_lancamento: string;
  sinopse: string;
  classificacao: string;
  plataformas: string;
  episodios: string;
}



const Listagem: React.FC = () => {
  const [serie, setSerie] = useState<Serie[]>([]);
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [animacao, setAnimacao] = useState<Animacao[]>([]);
  const [elementVisible, setElementVisible] = useState<string | null>(null);

  useEffect(() => {
    ListagemSerie();
    ListagemFilmes();
    ListagemAnimacao();
  }, []);


  // serie
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
    <TouchableOpacity onPress={() =>
        setElementVisible(elementVisible === item.id ? null : item.id)} > 
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
      </TouchableOpacity>
  </View>
);


// Filme
const ListagemFilmes = async () => {
  try {
    const response = await axios.get('http://10.137.11.213:8000/api/filmes/listagem');
    if (response.status === 200) {
      setFilmes(response.data.data);
      console.log(filmes);
    }
  } catch (error) {
    console.log(error);
  }
}

const Delete2 = async (id: number) => {
  axios.delete('http://10.137.11.213:8000/api/filmes/delete/' + id).then(function (response) {}
  ).catch(function (error) {
  console.log(error)
})
}


const renderItem2 = ({ item }: { item: Filme }) => (
  <View style={styles.item} key={item.id}>
    <TouchableOpacity onPress={() =>
        setElementVisible(elementVisible === item.id ? null : item.id)} > 
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
    <Text style={styles.numbertext}>{item.duracao}</Text>
    <TouchableOpacity onPress={() => Delete2(item.id)}>
    <Image source={require('../assets/images/trash.png')}style={styles.trash}/>
    </TouchableOpacity>
    </View >
    )} 
     <TouchableOpacity onPress={() => navigation.navigate('EditarFilmes', { item })}>
                <Image source={require('../assets/images/arrow.png')} style={styles.editarImage} />
            </TouchableOpacity>
      </TouchableOpacity>
  </View>
);


// Animação
const ListagemAnimacao = async () => {
  try {
    const response = await axios.get('http://10.137.11.213:8000/api/animacao/listagem');
    if (response.status === 200) {
      setAnimacao(response.data.data);
      console.log(animacao);
    }
  } catch (error) {
    console.log(error);
  }
}

const Delete3 = async (id: number) => {
  axios.delete('http://10.137.11.213:8000/api/animacao/delete/' + id).then(function (response) {}
  ).catch(function (error) {
  console.log(error)
})
}

const renderItem3 = ({ item }: { item: Animacao }) => (
  <View style={styles.item} key={item.id}>
    <TouchableOpacity onPress={() =>
        setElementVisible(elementVisible === item.id ? null : item.id)} > 
    <Text style={styles.nameText}>{item.titulo}</Text>
    <Text style={styles.text}>{item.genero}</Text>
    <Text style={styles.numbertext}>{item.dt_lancamento}</Text>
    <Text style={styles.text}>{item.classificacao}</Text>
    {elementVisible === item.id && ( 
      <View >
    <Text style={styles.text}>{item.diretor} </Text>
    <Text style={styles.text}>{item.sinopse}</Text>
    <Text style={styles.text}>{item.plataformas}</Text>
    <Text style={styles.numbertext}>eps{item.episodios}</Text>
    <TouchableOpacity onPress={() => Delete(item.id)}>
    <Image source={require('../assets/images/trash.png')}style={styles.trash}/>
    </TouchableOpacity>
    </View >
    )} 
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
      <View>
      <FlatList
        data={filmes}
        renderItem={renderItem2}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
</View>
<View style={styles.container}>
    <FlatList
        data={serie}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} 
        horizontal
      />

    </View>
    <View>
    <FlatList
        data={animacao}
        renderItem={renderItem3}
        keyExtractor={(item) => item.id} 
        showsHorizontalScrollIndicator={false}
        horizontal
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
    editarImage: {
      height: 50,
      width: 120
  },
    container2: {
      flex: 2,
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

export default Listagem;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput } from "react-native";
import FooterAdm from "../components/FooterAdm";
import { useNavigation } from "@react-navigation/native";



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


const ListagemF: React.FC = () => {
  const [pesquisa, setPesquisa] = useState<string>("");
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [elementVisible, setElementVisible] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    ListagemFilmes();
  }, []);


// Filme
const ListagemFilmes = async () => {
  try {
    if(pesquisa != ""){
    const response = await axios.get('http://10.137.11.213/api/filmes/pesquisar/'+pesquisa);
    setFilmes(response.data.data);
    } else {
      const response = await axios.get('http://10.137.11.213/api/filmes/listagem');
    setFilmes(response.data.data);
    }
  } catch (error) {
    console.log(error);
  }
}

const Delete = async (id: number) => {
  axios.delete('http://10.137.11.213/api/filmes/delete/' + id).then(function (response) {ListagemFilmes();}
  ).catch(function (error) {
  console.log(error)
  ListagemFilmes();
})
}


const renderItem = ({ item }: { item: Filme }) => (
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
    <TouchableOpacity onPress={() => Delete(item.id)}>
    <Image source={require('../assets/images/trash.png')}style={styles.trash}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('EditarFilmes', { item })}>
                <Image source={require('../assets/images/pen.png')} style={styles.editarImage} />
    </TouchableOpacity>
    </View >
    )} 
      </TouchableOpacity>
  </View>
);

const navigation = useNavigation();

  return (
    <View style={styles.container}>
 
      <View>
        <TouchableOpacity>
          <Image source={require('../assets/images/logo.png')} style={styles.Logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ListagemFilmes()} style={styles.button}>
          <Image source={require('../assets/images/refresh.png')} style={styles.refresh} />
        </TouchableOpacity>
      </View>
     
     <View>
      <TextInput style={styles.pesquisa} placeholder="Pesquisar" onChangeText={setPesquisa} />
        <TouchableOpacity onPress={ListagemFilmes}><Text>Pesquisar</Text></TouchableOpacity>
     </View>

      <FlatList
        data={filmes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          ListagemFilmes().then(() => setRefreshing(false));
        }}
      />

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
      width: 50,
      right: -20,
      top: -35
  },
  pesquisa:{
    borderWidth:1,
    borderRadius:20,
    height:50,
    width:380,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop: -40 
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
    height: 25,
    width: 25,
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
},
  refresh: {
    height: 70,
    width: 70,
    marginTop: -180,
    left: 150
},
  Logo: {
    height: 150,
    width: 300,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default ListagemF;

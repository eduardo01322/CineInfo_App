import axios from "axios";
import React, { useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const CadastroFilme: React.FC = () => {
    const [filme, setFilme] = useState<[]>([]);
    const [titulo, setTitulo] = useState<string>('');
    const [diretor, setDiretor] = useState<string>('');
    const [genero, setGenero] = useState<string>('');
    const [dt_lancamento, setDt_lancamento] = useState<string>('');
    const [sinopse, setSinopse] = useState<string>('');
    const [elenco, setElenco] = useState<string>('');
    const [classificacao, setClassificacao] = useState<string>('');
    const [plataformas, setPlataformas] = useState<string>('');
    const [duracao, setDuracao] = useState<string>('');

    const cadastrarFilme = async () => {
        try{
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('diretor', diretor);
        formData.append('genero', genero);
        formData.append('dt_lancamento', dt_lancamento);
        formData.append('sinopse', sinopse);
        formData.append('elenco', elenco);
        formData.append('classificacao', classificacao);
        formData.append('plataformas', plataformas);
        formData.append('duracao', duracao);

        const response = await axios.post('http://10.137.11.213:8000/api/filmes/cadastro', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }            
        });
    } catch(error) {
        console.log(error);
    }
    }
return (
    <View style={styles.container}>
            <TouchableOpacity>
            <Image source={require('../assets/images/logo.png')} style={styles.Logo} />
            </TouchableOpacity>

            <ScrollView style={styles.Login}>

                <Text style={styles.Text1}>--------------- Cadastrar Stream ----------------</Text>

             
                <TextInput style={styles.input} placeholder="titulo"
                value={titulo} onChangeText={setTitulo} multiline/>

                <TextInput style={styles.input} placeholder="Diretor"
                value={diretor} onChangeText={setDiretor}/>

                <TextInput style={styles.input} placeholder="Genero"
                value={genero} onChangeText={setGenero}/>

                <TextInput style={styles.input} placeholder="data de lancamento"
                value={dt_lancamento} onChangeText={setDt_lancamento}/>

                <TextInput style={styles.input} placeholder="Duracao"
                value={duracao} onChangeText={setDuracao}/>

                <TextInput style={styles.input} placeholder="Sinopse"
                value={sinopse} onChangeText={setSinopse} multiline/>

                <TextInput style={styles.input} placeholder="Elenco"
                value={elenco} onChangeText={setElenco} multiline/>

                <TextInput style={styles.input} placeholder="Classificação"
                value={classificacao} onChangeText={setClassificacao}/>

                <TextInput style={styles.input} placeholder="plataformas"
                value={plataformas} onChangeText={setPlataformas}/>

        
                <TouchableOpacity style={styles.button} onPress={cadastrarFilme}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>


            </ScrollView>
        </View>

);
}

const styles = StyleSheet.create({
    Login: {
        marginTop: 30
    },
    Text1: {
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 15,
        marginBottom:15
    },
    Text: {

        marginTop: -11
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D94F04',
        color: 'black',
        width: 360,
    },
    button: {
        backgroundColor: '#D94F04',
        height: 60,
        borderRadius: 20,
        width: 350,
        fontSize: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom:15,
        marginTop:9
    },
    buttonText: {
        fontSize: 25,
        width: 110,
        color: '#FFF',
        marginLeft: 118,
        marginTop: 13
    },
    forgotPassword: {
        color: '#D94F04',
        textAlign: 'center',
        fontSize: 10,

    },
    Icons: {
        marginTop: 20
    },
    Text2: {
        color: 'black',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Logo: {
        height: 150,
        width: 300,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    inputDate:{
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D94F04',
        color: 'black',
        width: '48%',
       
    },
    inputDuracao:{
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D94F04',
        color: 'black',
        width: '48%',
        marginLeft:'52%',
        marginVertical: -70
    },
    inputClassificacao:{
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D94F04',
        color: 'black',
        width: '48%',
        marginLeft:'52%',
        marginVertical: -70
    },
    inputGenero:{
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D94F04',
        color: 'black',
        width: '48%',
    },
    inputSinopse:{
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D94F04',
    color: 'black',
    width: 360,
    height:100,
}
});

export default CadastroFilme;
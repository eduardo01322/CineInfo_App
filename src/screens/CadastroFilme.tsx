import axios from "axios";
import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
            <StatusBar backgroundColor="red" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.headerText}>CineInfo</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="titulo"
                value={titulo} onChangeText={setTitulo} multiline/>

                <TextInput style={styles.input} placeholder="Diretor"
                value={diretor} onChangeText={setDiretor}/>

                <TextInput style={styles.input} placeholder="Genero"
                value={genero} onChangeText={setGenero}/>

                <TextInput style={styles.input} placeholder="dt_lancamento"
                value={dt_lancamento} onChangeText={setDt_lancamento} 
                keyboardType="numeric" keyboardAppearance="dark"/>

                <TextInput style={styles.input} placeholder="Sinopse"
                value={sinopse} onChangeText={setSinopse} multiline/>

                <TextInput style={styles.input} placeholder="Elenco"
                value={elenco} onChangeText={setElenco} multiline/>

                <TextInput style={styles.input} placeholder="Classificacao"
                value={classificacao} onChangeText={setClassificacao}/>

                <TextInput style={styles.input} placeholder="plataformas"
                value={plataformas} onChangeText={setPlataformas}/>

                <TextInput style={styles.input} placeholder="Duracao"
                value={duracao} onChangeText={setDuracao}/>
        
                <TouchableOpacity style={styles.button} onPress={cadastrarFilme}>
                    <Text style={styles.buttonText}>Cadastrar Produto</Text>
                </TouchableOpacity>
            </View>

        </View>

);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    form: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default CadastroFilme;
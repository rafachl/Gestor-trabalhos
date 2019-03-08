import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Picker } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      data: '',
      listaItens: [
        { nome: 'Trabalho de React', data: '08/03/2019' },

      ]
    }

    this.alterouTexto = this.alterouTexto.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  renderItemData(item) {
    return (
      <View style={styles.listaViewTotal}>
        <View style={styles.listaView}>
          <Text style={styles.itemListaNomeTexto}>{item.nome}</Text>
          <Text style={styles.itemListaCategoriaTexto}>{item.data}</Text>

        </View>
      </View>

    );
  }

  alterouTexto(texto) {
    let state = this.state;
    state.nome = texto;

    this.setState(state);
  }

  alterouData(texto) {
    let state = this.state;
    state.data = texto;

    this.setState(state);
  }

  cadastrar() {
    let state = this.state;

    if (state.nome != '' && state.data != '') {
      state.listaItens.push({ nome: state.nome, data: state.data });
      state.nome = '';
      state.data = '';
      this.setState(state)
      alert('Cadastrado com sucesso');
    } else {
      alert('Informe todos os campos');
    }
  }
  render() {
    return (
      <View style={styles.principalView}>
        <View style={styles.cabecalhoView}>
          <Text style={styles.cabecalhoTexto}>Gestor de Trabalhos</Text>
        </View>



        <View style={styles.corpoView}>
          <FlatList data={this.state.listaItens} renderItem={({ item }) => this.renderItemData(item)} />
        </View>

        <View style={styles.cadastrarView}>


          <TextInput
            style={styles.textoInput}
            keyboardType='default'
            placeholder='Digite o trabalho'
            onChangeText={(texto) => this.alterouTexto(texto)}
            value={this.state.nome}>
          </TextInput>
          <TextInput
            style={styles.textoInput}
            keyboardType='default'
            placeholder='Digite a data'
            onChangeText={(texto) => this.alterouData(texto)}
            value={this.state.data}>
          </TextInput>


          <TouchableOpacity style={styles.botaoCadastrar} onPress={this.cadastrar}                  >
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rodapeView}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principalView: {
    flex: 1,
    backgroundColor: 'gray'
  },

  cabecalhoView: {
    backgroundColor: '#969090',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  corpoView: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  rodapeView: {
    height: 40,
    backgroundColor: '#969090',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  cabecalhoTexto: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold'
  },

  rodapeTexto: {
    fontSize: 15,
    color: 'black'
  },

  listaViewTotal: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  listaView: {
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#998e8e',
    flexGrow: 1,
    margin: 2,
    width: 280,
    height: 55,
    borderRadius: 10
  },

  itemListaCategoriaTexto: {
    fontSize: 15,
    fontStyle: 'italic'
  },

  itemListaNomeTexto: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  cadastrarView: {
    backgroundColor: '#f0f0f0',
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  textoInput: {
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    width: 300,
    marginBottom: 5
  },

  categoriaCombo: {
    height: 50,
    width: 120,
    borderWidth: 2,
    borderColor: 'black'
  },

  botaoCadastrar: {
    width: 150,
    alignItems: 'center',
    backgroundColor: '#969696',
    padding: 10,
    borderColor: '#87CEFF',
    borderRadius: 15
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = 'rgb(139, 148, 158)'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/70148001?s=400&u=7afca520ab270d772864fa29b3acc5ba99c44eb5&v=4';
const urlMyGithub = 'https://github.com/jessicatorreslima';

const App = () => {
    const handlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL(urlMyGithub);
        console.log('Verificando link');
        if (res) {
            console.log('link aprovado');
            console.log('Abrindo link...');
            await Linking.openURL(urlMyGithub);
        } else {
            console.log('Link não permitido');
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'black'} barStyle="light-content"/>
            <View style={style.content}>
                <Image
                    accessibilityLabel='Jéssica com camisa social rosa e blazer preto com fundo branco'
                    style={style.avatar}
                    source={{uri:imageProfileGithub }}
                />
                <Text
                    accessibilityLabel='Nome: Jéssica Torres de Lima'
                    style={[style.defaultText, style.name]}>
                        Jéssica Torres de Lima
                </Text>
                <Text 
                    accessibilityLabel='Usuário: jessicatorreslima'
                    style={[style.defaultText, style.nickname]}>
                        jessicatorreslima
                </Text>
                <Text
                    accessibilityLabel='Descrição: Web Developer | PHP | Angular | Node | Typescript | Javascript'
                    style={[style.defaultText, style.description]}>
                        Web Developer | PHP | Angular | Node | Typescript | Javascript
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                            </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        overflow: 'hidden',
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        margin: 10,
    },
    defaultText: {
        color: 'white',
        padding: 2
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    nickname: {
        fontSize: 18,
        color: colorFontGithub
    },
    description: {
        fontSize: 14
    },
    button: {
        backgroundColor: colorFontGithub,
        borderRadius: 10,
        padding: 10,
        margin: 20
    },
    textButton: {
        fontWeight: 'bold'
    }
});
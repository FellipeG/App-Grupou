import styled from 'styled-components/native';

export const AppContainer = styled.View`
    background-color: #AB1B71;
    flex: 1;
    padding: 10px 10px 0px 10px;
    align-items: center;
    justify-content: flex-end;
`;

export const LoginContainer = styled.View`
    height: 52%;
    background-color: #FFF;
    width: 100%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    padding: 20px;
`;

export const Texto = styled.Text`
    font-size: 40px;
`;

export const BotaoContainer = styled.View`
    flex-direction: row;
`;

export const BotaoAba = styled.TouchableOpacity`
    border-bottom-width: 4px;
    border-bottom-color: ${props => props.lastClick ? "#AE1B73" : "#FFF"};
    height: 60px;
    margin: 0px 5px;
    flex: 1;
    align-items: center;
    justify-content:center;
`;

export const BotaoTexto = styled.Text`
    font-size: 20px;
    color: #673F66;
`;

export const Input = styled.TextInput`
    border: 1px solid #CCC;
    height: 65px;
    margin-top: 5px;
    border-radius: 5px;
    padding: 0 20px;
`;

export const InputTexto = styled.Text`
    margin-top: 20px;
    color: #B4B8C6;
`;
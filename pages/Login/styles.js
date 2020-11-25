import styled from 'styled-components/native';

export const AppContainer = styled.View`
    background-color: #AB1B71;
    flex: 1;
    padding: 10px 10px 0px 10px;
    align-items: center;
    justify-content: flex-end;
`;

export const LoginContainer = styled.View`
    height: 60%;
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

export const BotaoForm = styled.TouchableOpacity`
    height: 60px;
    flex: 1;
    align-items: center;
    justify-content:center;
    background-color: ${ props => (props.invert == true) ? '#FFF' : '#AE1B73' };
    border-radius: 5px;
    margin-right: ${ props => (props.invert == true) ? '10px' : '0px'};
    border: 1px solid #AE1B73;
`;

export const BotaoFormTexto = styled.Text`
    font-size: 16px;
    color: ${ props => (props.invert == true) ? '#AE1B73' : '#FFF' };
    font-weight: bold;
`;

export const ForgotPassword = styled.Text`
    color: #AE1B73;
    font-size: 14px;
    text-align: right;
    margin: 5px 0px 30px 0px;
`;

export const Logo = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ViewChamadaGrupou = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextoChamadaGrupou = styled.Text`
    color: #FFF;
    font-size: 20px;
    text-align: center;
`;

export const TextoGrupou = styled.Text`
    font-weight: bold;
`;
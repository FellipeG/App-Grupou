import styled from 'styled-components/native';

export const AppContainer = styled.View`
    background-color: #AB1B71;
    flex: 1;
    padding: 25px 10px 0px 10px;
    align-items: center;
    justify-content: flex-end;
`;

export const Texto = styled.Text`
    color: #FFF;
    font-size: 20px;
    text-align: center;
`;

export const BotaoContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const BotaoForm = styled.TouchableOpacity`
    height: 60px;
    flex: 1;
    align-items: center;
    justify-content:center;
    background-color: ${ props => (props.invert == true) ? '#FFF' : '#AE1B73' };
    border-radius: 5px;
    border: 1px solid #AE1B73;
`;

export const BotaoFormTexto = styled.Text`
    font-size: 16px;
    color: ${ props => (props.invert == true) ? '#AE1B73' : '#FFF' };
    font-weight: bold;
`;

export const Input = styled.TextInput`
    flex: 3;
    border: 1px solid #CCC;
    height: 60px;
    border-radius: 5px;
    padding: 0 20px;
    background-color: #E6E6E6;
    margin-right: 10px;
`;

export const ContainerMessages = styled.View`
    flex: 1;
    width: 100%;
`;

export const Message = styled.Text`
    font-size: 14px;
    text-align: justify;
    color: #FFF;
    padding-top: 5px;
`;

import styled from 'styled-components/native';

export const AppContainer = styled.View`
    background-color: #AB1B71;
    flex: 1;
    padding: 10px 10px 0px 10px;
    align-items: center;
    justify-content: center;
`;

export const Texto = styled.Text`
    color: #FFF;
    font-size: 20px;
    text-align: center;
`;

export const BotaoContainer = styled.View`
    flex-direction: row;
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


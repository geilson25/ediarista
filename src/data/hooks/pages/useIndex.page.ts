import { useState } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';

export default function useIndex(){
    const [ cep, setCep ] = useState(''),
        [ erro, setErro] = useState(''),
        [ buscaFeita, setBuscafeita] = useState(false),
        [ carregando, setCarregando] = useState(false),
        [ diaristas, setDiaristas ] = useState([] as UserShortInterface[]),
        [ diaristasRestantes, setDiaristasrestantes ] = useState(0);

    return{
        cep,
        setCep,
    };
}
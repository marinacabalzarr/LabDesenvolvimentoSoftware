import api from './api';

export const criarVantagem = (vantagem) => {
    return api.post('/vantagens', vantagem);
};

export const listarTodasVantagens = () => {
    return api.get('/vantagens');
};
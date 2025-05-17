import api from './api';

export const getEmpresas = async () => {
    try {
        const response = await api.get('/empresas');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar empresas:', error);
        throw error;
    }
};

export const getEmpresaById = async (id) => {
    try {
        const response = await api.get(`/empresas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar empresa:', error);
        throw error;
    }
};

export const createEmpresa = async (empresa) => {
    try {
        const response = await api.post('/empresas', empresa);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar empresa:', error);
        throw error;
    }
};

export const updateEmpresa = async (id, empresa) => {
    try {
        const response = await api.put(`/empresas/${id}`, empresa);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar empresa:', error);
        throw error;
    }
};

export const deleteEmpresa = async (id) => {
    try {
        const response = await api.delete(`/empresas/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar empresa:', error);
        throw error;
    }
};
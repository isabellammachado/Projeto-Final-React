import axios from 'axios';
import fotoDefault from '../assets/images/images.png';

const API_BASE_URL = 'https://68dda415d7b591b4b78cfdb5.mockapi.io/users';

export const apiUsers = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const quizApi = axios.create({
    baseURL: 'https://opentdb.com/api.php',
});

export async function findUserByEmail(email) {
    try {
        const response = await apiUsers.get('/');
        const users = response.data;
        return users.find(user => user.email === email) || null;
    } catch (error) {
        console.error(error);
        throw new Error("Falha na comunicação com a API ao buscar usuário.");
    }
};

export async function loginUser(email, password) {
    try {
        const response = await apiUsers.get('/');
        const users = response.data;

        const user = users.find(u => u.email === email);

        if (user && user.password === password) {
            return user;
        }
        return null;
    } catch (error) {
        console.error(error);
        throw new Error("Falha na comunicação com a API durante o login.");
    }
};

export async function registerNewUser(userData) {
    try {
        if (!userData.avatar || userData.avatar.trim() === "") {
            userData.avatar = fotoDefault;
        }

        const response = await apiUsers.post('', userData);
        return response.data;
    } catch (error) {
        throw new Error("Falha ao cadastrar usuário na API.");
    }
}

export async function updateUser(userId, novosDados) {
    try {
        const response = await apiUsers.put(`/${userId}`, novosDados);
        return response.data;
    } catch (error) {
        throw new Error("Falha ao atualizar usuário na API.");
    }
};

export async function getRanking() {
    try {
        const response = await apiUsers.get('');
        const users = response.data;

        const sortedRanking = users
            .sort((a, b) => (b.pontos || 0) - (a.pontos || 0));

        return sortedRanking;
    } catch (error) {
        throw new Error("Falha ao buscar ranking da API.");
    }
};

export async function addPoints(userId, pointsToAdd) {
    try {
        const userResponse = await apiUsers.get(`/${userId}`);
        const currentPoints = userResponse.data.pontos || 0;
        const newPoints = currentPoints + pointsToAdd;


        const response = await apiUsers.put(`/${userId}`, { pontos: newPoints });

        return { success: true, newPoints: response.data.pontos };
    } catch (error) {
        throw new Error("Falha ao atualizar pontuação na API.");
    }
};
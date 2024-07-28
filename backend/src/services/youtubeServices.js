const axios = require('axios');

// Configuração da API do YouTube
const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

exports.getChannelUploads = async (channelId) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        channelId,
        maxResults: 5,
        order: 'date',
        key: API_KEY
      }
    });
    return response.data.items;
  } catch (error) {
    throw new Error('Erro ao buscar vídeos do canal:', error);
  }
};

const Video = require('../models/videoModel');
const opusService = require('../services/opusService');
const youtubeService = require('../services/youtubeService');

// Criar novo vídeo
exports.createVideo = async (req, res) => {
  const { url, title, description } = req.body;

  try {
    const video = new Video({ url, title, description });
    await video.save();
    res.status(201).json({ message: 'Vídeo criado com sucesso!', video });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar vídeo', error });
  }
};

// Gerar clipes do vídeo com Opus
exports.generateClips = async (req, res) => {
  const { videoUrl } = req.body;

  try {
    const clips = await opusService.generateClips(videoUrl);
    res.status(200).json(clips);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao gerar clipes', error });
  }
};

// Obter vídeos de um canal do YouTube
exports.getChannelUploads = async (req, res) => {
  const { channelId } = req.params;

  try {
    const videos = await youtubeService.getChannelUploads(channelId);
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar vídeos', error });
  }
};
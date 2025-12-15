import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const publicDir = './public';
const imageFiles = ['dr-lauane-cartao.png', 'mateus-silva-cartaov.png', 'barbearia-corte-vip.png', 'panela-mineira.png'];

async function optimizeImages() {
  console.log('🖼️  Otimizando imagens...\n');

  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace('.png', '.webp'));
    
    try {
      // Converter para WebP com qualidade otimizada
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      console.log(`✅ ${file} → ${file.replace('.png', '.webp')}`);
      
      // Criar versão mobile (width: 800px para telas retina)
      const mobilePath = path.join(publicDir, file.replace('.png', '-mobile.webp'));
      await sharp(inputPath)
        .resize({ width: 800 })
        .webp({ quality: 85, effort: 6 })
        .toFile(mobilePath);
      
      console.log(`📱 ${file} → ${file.replace('.png', '-mobile.webp')}`);
      
    } catch (error) {
      console.error(`❌ Erro ao processar ${file}:`, error.message);
    }
  }
  
  console.log('\n✨ Otimização concluída!');
}

optimizeImages();

import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  priority?: boolean;
  className?: string;
}

/**
 * Componente de Imagem Otimizada para Alta Performance.
 * Substitui a tag <img> padrão para garantir Core Web Vitals saudáveis.
 * 
 * Funcionalidades:
 * - Lazy Loading nativo (para imagens fora da dobra)
 * - Decodificação Assíncrona (não bloqueia a renderização)
 * - Prevenção de CLS (Cumulative Layout Shift) forçando aspect ratio
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  ...props
}) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-full object-cover"
        {...props}
      />
    </div>
  );
};
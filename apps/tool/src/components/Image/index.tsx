'use client';

import { useEffect, useRef, useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // 加载失败时显示的图片
  rejectImage?: string;
}
export default function Image({
  src,
  rejectImage = '/TokenBpro.png',
  ...props
}: ImageProps) {
  const [image, setImage] = useState(src);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    setImage(src);
    if (!ref.current) return;
    ref.current.onerror = (e) => {
      console.log('加载失败', e);
      setImage(rejectImage);
    };
  }, [src, rejectImage]);
  return <img src={image} width={100} height={100} ref={ref} {...props} />;
}

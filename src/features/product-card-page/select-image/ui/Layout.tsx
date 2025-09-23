// src/features/product-card-page/select-image/ui/Layout.tsx
import { useState } from 'react';
import s from './styles.module.scss';

const images = [
  '/d40da9a3a7234235e66d6695d9d7098fc3289872.png',
  '/d40da9a3a7234235e66d6695d9d7098fc3289872.png',
  '/d40da9a3a7234235e66d6695d9d7098fc3289872.png',
];

export const UiSelectImage = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={s.selectImageBlock}>
      <ul className={s.imagesList}>
        {images.map((image, index) => (
          <li
            key={index}
            className={s.imageItem}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Preview ${index + 1}`} />
          </li>
        ))}
      </ul>
      <div className={s.selectedImagePreview}>
        <img
          className={s.selectedImage}
          src={selectedImage}
          alt="Selected product image"
        />
      </div>
    </div>
  );
};

import { useState } from 'react';
import { RootState } from '@/app/providers/store';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';

export const UiChooseSize = () => {
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

  const selectedColorId = useSelector(
    (state: RootState) => state.selectedProduct.selectedColor
  );
  const variants = useSelector(
    (state: RootState) => state.selectedProduct.variants
  );
  const currentColor = useSelector(
    (state: RootState) => state.selectedProduct.selectedColor
  );

  const sizesForColor = currentColor
    ? variants.filter((variant) => variant.color.id === selectedColorId)
    : variants;

  const uniqueSizes = Array.from(
    new Map(sizesForColor.map((v) => [v.size.id, v.size])).values()
  );

  const handleSizeSelect = (sizeId: string) => {
    setSelectedSizeId(sizeId);
  };

  return (
    <div className={s.chooseSizeContainer}>
      <h3 className={s.sizeLabel}>Choose Size</h3>
      <ul className={s.sizesContainer}>
        {uniqueSizes.map((size) => (
          <li
            key={size.id}
            className={`${s.sizeItem} ${selectedSizeId === size.id ? s.selected : ''}`}
            onClick={() => handleSizeSelect(size.id)}
          >
            <span className={s.sizeName}>{size.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

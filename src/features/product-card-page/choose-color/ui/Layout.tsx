import { useState } from 'react';
import { RootState } from '@/app/providers/store';
import { useSelector, useDispatch } from 'react-redux';
import s from './styles.module.scss';
import {
  setActualSizes,
  setColor,
  setVariantId,
} from '@/entities/product/model/productSlice';

export const UiSelectColor = () => {
  const dispatch = useDispatch();
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  const variants = useSelector(
    (state: RootState) => state.selectedProduct.variants
  );

  const uniqueColors = Array.from(
    new Map(variants.map((v) => [v.color.id, v.color])).values()
  );

  // Функция выбора размеров по цвету
  const handleSelectColor = (colorId: string) => {
    setSelectedColorId(colorId);
    dispatch(setColor(colorId));

    // Задать id варианта по выбранному цвету
    let currentVariantId = '';

    const filterSizesByColor = variants.filter((variant) => {
      currentVariantId = variant.id;

      return variant.color.id === colorId;
    });
    dispatch(setVariantId(currentVariantId));

    const sizes = filterSizesByColor.map((variant) => variant.size);
    dispatch(setActualSizes(sizes));
  };

  return (
    <div className={s.colorsContainer}>
      <h3 className={s.colorLabel}>Choose color</h3>
      <ul className={s.colorOption}>
        {uniqueColors.map((color) => (
          <li
            key={color.id}
            className={`${s.colorItem} ${selectedColorId === color.id ? s.colorItemSelected : ''}`}
            onClick={() => handleSelectColor(color.id)}
            style={{ backgroundColor: color.hex }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

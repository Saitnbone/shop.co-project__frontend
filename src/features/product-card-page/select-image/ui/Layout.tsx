import s from './styles.module.scss';

export const UiSelectImage = () => {
  return (
    <div className={s.selectImageBlock}>
      <ul className={s.imagesList}>
        <li className={s.imageItem}>
          <img src="/d40da9a3a7234235e66d6695d9d7098fc3289872.png" alt="" />
        </li>
        <li className={s.imageItem}>
          <img src="/d40da9a3a7234235e66d6695d9d7098fc3289872.png" alt="" />
        </li>
        <li className={s.imageItem}>
          <img src="/d40da9a3a7234235e66d6695d9d7098fc3289872.png" alt="" />
        </li>
      </ul>
      <div className={s.selectedImagePreview}>
        <img
          className={s.selectedImage}
          src="/d40da9a3a7234235e66d6695d9d7098fc3289872.png"
          alt="Selected image"
        />
      </div>
    </div>
  );
};

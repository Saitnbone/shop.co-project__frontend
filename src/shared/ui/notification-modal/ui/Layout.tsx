import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/providers/store';
import { closeModal } from '@/shared/ui/notification-modal/store/notificationModalStore';
import s from './styles.module.scss';

export const UiNotificationModal = () => {
  const dispatch = useDispatch();
  const { titleText, modalMessage, eventType, isOpen } = useSelector(
    (state: RootState) => state.notificationModal
  );

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      dispatch(closeModal());
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen, dispatch]);

  return (
    <div className={s.notificationModal}>
      <div className={`${s.notificationModalHeader} ${s[eventType]}`}></div>
      <div className={s.notificationModalContent}>
        <span className={s.notificationModalTitle}>{titleText}</span>
        <p className={s.notificationModalBody}>{modalMessage}</p>
      </div>
    </div>
  );
};

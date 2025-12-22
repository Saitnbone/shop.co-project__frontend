import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface INotificationModalState {
  titleText: string;
  modalMessage: string;
  eventType: 'success' | 'error' | 'warning';
  isOpen: boolean;
}

const initialState: INotificationModalState = {
  titleText: '',
  modalMessage: '',
  eventType: 'success',
  isOpen: false,
};

export const notificationModalSlice = createSlice({
  name: 'notificationModal',
  initialState,
  reducers: {
    openModal(
      state,
      action: PayloadAction<Omit<INotificationModalState, 'isOpen'>>
    ) {
      state.titleText = action.payload.titleText;
      state.modalMessage = action.payload.modalMessage;
      state.eventType = action.payload.eventType;
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

const notificationModalReducer = notificationModalSlice.reducer;
export const { openModal, closeModal } = notificationModalSlice.actions;
export default notificationModalReducer;

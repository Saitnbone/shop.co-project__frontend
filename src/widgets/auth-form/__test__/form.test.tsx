// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { describe, it, expect, vi, beforeEach } from 'vitest';

// // mocks
// const navigateMock = vi.fn();
// const loginUserMock = vi.fn().mockResolvedValue({});
// const registerUserMock = vi.fn().mockResolvedValue({});

// vi.mock('react-router-dom', async () => {
//   const actual = await vi.importActual('react-router-dom');
//   return {
//     ...actual,
//     useNavigate: () => navigateMock,
//   };
// });

// vi.mock('@/features/login-user/api/api', () => ({
//   loginUser: loginUserMock,
// }));

// vi.mock('@/features/register-user/api/api', () => ({
//   registerUser: vi.fn().mockResolvedValue({}),
// }));

// import { UiAuthForm } from '../ui/Layout';

// describe('UiAuthForm', () => {
//   beforeEach(() => {
//     vi.clearAllMocks();
//     // очистить document между тестами
//     document.body.innerHTML = '';
//   });

//   it('тестирует рендеринг формы', () => {
//     render(<UiAuthForm />);
//     expect(screen.queryByPlaceholderText);
//   });
// });

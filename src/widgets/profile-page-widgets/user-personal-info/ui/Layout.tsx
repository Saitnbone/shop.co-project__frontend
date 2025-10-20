import s from './styles.module.scss';

export const UiUserPersonalInfo = () => {
  return (
    <div className={s.userPersonalInfo}>
      <div className={s.userAvatar}>
        <img src="/path/to/avatar.jpg" alt="User Avatar" />
      </div>
      <div>
        <h2>User personal info</h2>
        
        <ul>
          <li>Full Name: John Doe</li>
          <li>Email: john.doe@example.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Address: 123 Main St, Anytown, USA</li>
          <li>Telegram: @johndoe</li>
        </ul>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './passwordInput.css';

function PasswordInput({ id, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="password-input">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          value={value}
          onChange={onChange} // Agora, o evento de mudança é repassado ao componente pai
        />
        <span onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>
  );
}

export default PasswordInput;

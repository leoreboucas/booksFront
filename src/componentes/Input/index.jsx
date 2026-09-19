import './estilo.css';

function Input({
  type = 'text',
  placeholder = 'Digite aqui',
  className = '',
  value,
  onBlur,
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input-padrao ${className}`.trim()}
      value={value}
      onBlur={onBlur}
      {...props}
    />
  );
}

export default Input;

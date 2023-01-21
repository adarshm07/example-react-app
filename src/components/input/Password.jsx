export default function PasswordInput({ name, value, onChange }) {
  return (
    <label>
      {name}
      <input type="password" name={name} value={value} onChange={onChange} />
    </label>
  );
}

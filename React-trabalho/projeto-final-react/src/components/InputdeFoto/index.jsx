export const InputFoto = ({ onChange }) => {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={onChange}
      aria-label="Selecionar nova foto de perfil"
      style={{
        marginTop: "10px",
        cursor: "pointer"
      }}
    />
  );
};

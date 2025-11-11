import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#955816',
  border: '3px solid #000',
  borderRadius: 2,
  boxShadow: 24,
  pt: 4,
  px: 5,
  pb: 3,
};

export function NestedModal({ usuario, editar }) {
  const [open, setOpen] = useState(false);
  const [novoNome, setNovoNome] = useState(usuario?.nome || "");

  const abrirModal = () => setOpen(true);
  const fecharModal= () => setOpen(false);

  const salvarNome = () => {
    if (!novoNome) return;
    if (novoNome !== usuario.nome) {
      editar({ nome: novoNome });
    }
    fecharModal();
  };

  return (
    <div>
      <Button
  onClick={abrirModal}
  style={{
    backgroundColor: '#007bff',  
    color: 'white',
    borderRadius: '6px',
    fontWeight: 'bold',
    padding: '12px 25px',
    border: '3px solid black',
    boxShadow: '4px 4px 0px black',
    fontFamily: 'sans-serif',
    fontSize: '0.85rem',
    cursor: 'pointer',
  }}
>
  Editar Perfil
</Button>

      <Modal
        open={open}
        onClose={fecharModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Digite seu novo nome:</h2>
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
          />
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            <Button onClick={fecharModal}>Cancelar</Button>
            <Button variant="contained" onClick={salvarNome}>
              Salvar
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

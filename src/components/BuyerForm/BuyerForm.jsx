import { useState } from 'react';
import styles from './styles.module.css';

const BuyerForm = ({onForSubmit}) => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    // Verificar que ambos emails sean iguales
    if (email === emailConfirmacion) {
      // Realizar acciones con los datos ingresados
      const buyerInfo = {
        name, lastName, cell, email
      }

      onForSubmit(buyerInfo)

    } else {
      alert('Los emails no coinciden. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Celular:
        <input
          type="numer"
          value={cell}
          onChange={(e) => setCell(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Confirmar Email:
        <input
          type="email"
          value={emailConfirmacion}
          onChange={(e) => setEmailConfirmacion(e.target.value)}
        />
      </label>
      <button >Generar orden de compra</button>
    </form>
  );
};

export default BuyerForm;




import { useState } from 'react';
import styles from './BuyerForm.module.css';
import Swal from 'sweetalert2';

const BuyerForm = ({onForSubmit}) => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmacion, setEmailConfirmacion] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !lastName || !cell || !email || !emailConfirmacion) {
      Swal.fire({
        icon: 'error',
        title: 'Ups! Parece que hubo un error',
        text: 'Por favor, completa todos los campos.',
      });
      return;
    }

    if (email === emailConfirmacion) {
      const buyerInfo = {
        name, lastName, cell, email
      }

      onForSubmit(buyerInfo)

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ups! Parece que hubo un error',
        text: `Los dos email escritos no son iguales`,
    })
    }
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Nombre:
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Apellido:
        <input
          type="text"
          className={styles.input}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Celular:
        <input
          type="number"
          className={styles.input}
          value={cell}
          onChange={(e) => setCell(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Email:
        <input
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Confirmar Email:
        <input
          type="email"
          className={styles.input}
          value={emailConfirmacion}
          onChange={(e) => setEmailConfirmacion(e.target.value)}
        />
      </label>
      <button className={styles.button}>Generar orden de compra</button>
    </form>
  );

};

export default BuyerForm;




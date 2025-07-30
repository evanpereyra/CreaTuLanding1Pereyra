import React from 'react';

const ItemListContainer = ({ saludo }) => {
  return (
    <section>
      <h2>{saludo}</h2>
    </section>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center'
  }
};

export default ItemListContainer;

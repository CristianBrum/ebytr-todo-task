import React, { useState } from 'react';
import Loading from './Loading';

function Header() {
  const [loading, setLoading] = useState(false);

  function refheshPage() {
    setLoading(!loading);
  }

  return (
    <>
      {loading ? <Loading />
        : (
          <button
            type="button"
            onClick={() => { refheshPage(); }}
            className="header"
          >
            EBYTR Todo Task
          </button>
        )}
    </>
  );
}

export default Header;

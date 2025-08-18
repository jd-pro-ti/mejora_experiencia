'use client';

import React, { useState } from 'react';
import WizarSteps from '../WizardExperincia/WizarSteps';
import Button from './Button'

export default function Modal() {
  const [showWizar, setShowWizar] = useState(false);


  return (
    <>
      <Button
        text="Comienza tu aventura"
        variant="secondary"
        size="sm"
        className="cursor-pointer"
        onClick={() => {
          setShowWizar(true);
        }}>
            
        </Button>

      {showWizar && (
        <WizarSteps
          show={showWizar}
          onClose={() => setShowWizar(false)}
        />
      )}
    </>
  );
}

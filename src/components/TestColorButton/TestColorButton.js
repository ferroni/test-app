import { useState } from 'react';
import { Button, Input, Label } from './TestColorButton.styles';

function TestColorButton() {
  const [buttonColorClass, setButtonColorClass] = useState('red-btn');
  const newButtonColor =
    buttonColorClass === 'red-btn' ? 'blue' : 'red';

  return (
    <>
      <Button
        className={buttonColorClass}
        onClick={() => setButtonColorClass(`${newButtonColor}-btn`)}
      >
        Change to {newButtonColor}
      </Button>
      <Input type="checkbox" id="disable-button-checkbox" />
      <Label htmlFor="disable-button-checkbox">Disable button</Label>
    </>
  );
}

export default TestColorButton;

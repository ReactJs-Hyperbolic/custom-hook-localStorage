import React from 'react';
import useLocalStorage from './useLocalStorage';

export default function App() {
  const [value, setValue] = useLocalStorage('name', () => 'initial value');

  // const alphabet = ['A', 'Z', 'F', 'D', 'e', 'f'];
  // const numbers = [1, 2, 3, 4, 5, 6];

  // const [a, b] = alphabet;
  // const newArray = [...alphabet, ...numbers];
  // const newArray2 = alphabet.concat(numbers);

  // function sumAndMultiply(a, b) {
  //   return [a+b, a*b]
  // }

  return (
    <>
      <h1>{value}</h1>
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </>
  );
}

import { useState, useEffect } from 'react';

// Get value from localStorage using the passed in key and initial value
function getSavedValue(key, initialValue) {
  // Create a new value to store the parsed JSON object from localStorage for a value at the passed in key
  const savedValue = JSON.parse(localStorage.getItem(key));
  // If there was a value in storage at the provided key, return it,
  if (savedValue) return savedValue;
  // If the inital value was a function, call the function and return the result of it
  if (initialValue instanceof Function) return initialValue();
  // Otherwise, just return the initialValue
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  //   When our component renders or when the value is changed...
  useEffect(() => {
    //   Update and save our value within local stoage on render and when the value is changed
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  //   Return our value and setValue state variables just like useState
  return [value, setValue];
}

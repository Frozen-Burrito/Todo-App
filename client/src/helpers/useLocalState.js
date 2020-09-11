import { useState, useEffect } from 'react';

export const useLocalState = ( key, defaultValue ) => {
  const [ value, setValue ] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue))
      }
    }

    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    }
  }, [key])

  const setValueInLocalStorage = ( newValue ) => {
    setValue(currentValue => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  }

  return [ value, setValueInLocalStorage ]; 
}
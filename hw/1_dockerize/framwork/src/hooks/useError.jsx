import { useState } from "react";

const useError = () => {
  const [error, setError] = useState({
    name: null,
    description: null,
  });

  const validateName = async (name) => {
    if (name.length < 3 && !error.name) {
      setError({
        ...error,
        name: "Name must be at least 3 characters long",
      });
    } else if (name.length >= 3 && error.name) {
      setError({ ...error, name: false });
    }
  };

  const validateDescription = async (description) => {
    if (description.length < 10 && !error.description) {
      setError({
        ...error,
        description: "Description must be at least 10 characters long",
      });
    } else if (description.length >= 10 && error.description) {
      setError({ ...error, description: false });
    }
  };

  const setAll = () => {
    setError({
      name: "Name must be at least 3 characters long",
      description: "Description must be at least 10 characters long",
    });
  };

  const reset = () => {
    setError({ name: null, description: null });
  };

  return { error, validateName, validateDescription, setAll, reset };
};

export default useError;

import { useCallback, useState } from "react";
import { v4 } from "uuid";

const useCRUD = ({ localStorageKey, initialData, targetRef }) => {
  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );
  const [data, setData] = useState(initialData);
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);

  const resetForm = useCallback(() => {
    setData(initialData);
  }, [initialData]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const form = event.currentTarget;

      if (form.checkValidity()) {
        let newData = { ...data, id: v4() };
        let newAllData;
        if (selected === null) {
          newAllData = [...allData, newData];
        } else {
          newAllData = allData.map((data) => {
            if (data.id === selected) {
              return newData;
            } else {
              return data;
            }
          });
        }
        targetRef.current.focus();
        setAllData(newAllData);
        resetForm();
        setSelected(null);
        localStorage.setItem(localStorageKey, JSON.stringify(newAllData));
      } else {
        setValidated(true);
      }
    },
    [resetForm, selected, data, allData, localStorageKey, targetRef]
  );

  const handleData = useCallback(
    (e) => {
      setData({ ...data, [e.target.id]: e.target.value });
    },
    [data]
  );

  const editData = useCallback(
    (id) => {
      let data = allData.find((data) => data.id === id);
      setSelected(id);
      setData(data);
    },
    [allData]
  );

  const deleteData = useCallback(
    (id) => {
      let newAllData = allData.filter((student) => student.id !== id);
      setAllData(newAllData);
      localStorage.setItem(localStorageKey, JSON.stringify(newAllData));
    },
    [allData, localStorageKey]
  );

  return {
    data,
    allData,
    selected,
    validated,
    resetForm,
    handleData,
    handleSubmit,
    editData,
    deleteData,
  };
};

export default useCRUD;

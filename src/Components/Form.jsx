import React,{useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
  
    if (!isNameValid || !isEmailValid){
      alert("Por favor verifique su informacion nuevamente")
    }
    else {
      alert(`Gracias ${name}, te contactaremos cuanto antes via mail.`)
    }
  }
  
  const validateName = (name) => {
    if (name.length > 4)
      return true;
    else 
      return false;
  }
  
  const validateEmail = (email) => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      return false;
    else
      return true;
  }
  

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={onChangeName}
         />
         <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={onChangeEmail}
         />
         <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

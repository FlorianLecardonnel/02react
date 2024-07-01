import React, { useContext } from "react";
import { UserContext } from "../context/ThemeUserProvider";

type props<T> = {
  type: string;
  value: T;
  placeholder: string;
};
//récupérer avec le hook useContext le contenu de UserContext
//qui est de type IUserContextProps

const ComponentInput: React.FC<any> = ({
    type,
    value,
    placeholder,
    onChangeInput,
}) => {
    const useContextValue = useContext(UserContext);
    
    if (!useContextValue) {
      throw new Error("useContext must be used within a UserProvider");
    }
  function modifierLaValeurInput(e: any) {
    if (type === "number") {
    } else {
      onChangeInput(e.target.value);
    }
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => modifierLaValeurInput(e)}
          placeholder={placeholder}
        ></input>
      </div>
      <div>{useContextValue?.user}</div>
    </>
  );
};

export default ComponentInput;

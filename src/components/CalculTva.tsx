import React, { useState, useEffect, useContext } from "react";
import calculPourcentage from "../utils/calculPourcentage";
import ICalculTva from "../interfaces/ICalculTva";
import ComponentInput from "./form/CompontentInput";
import { UserContext } from "./context/ThemeUserProvider";


//deux variables nombreACalculer et tva
const CalculTva: React.FC<any> = () => {
  const [nombreACalculer, setNombreACalculer] = useState(0);
  const [tva, setTva] = useState(0);
  const [resultat, setResultat] = useState(0);

  const CalculTvaObject: ICalculTva = { nombreACalculer: 0, tva: 0, description:"", information: "Information importante"};
  const [calculTvaState, setCalculTvaState] = useState(CalculTvaObject);

  
  const handleChange = (attribut: string, value: number) => {
    setCalculTvaState({ ...calculTvaState, [attribut]: value });
    
  };
  function handleChangeGen<T>(attribut: string, value: T): void {
    setCalculTvaState({ ...calculTvaState, [attribut]: value });
    
  };
  useEffect(() => {
    function calculerTvaEffect() {
      let resulatCalcul = calculPourcentage(calculTvaState.nombreACalculer, calculTvaState.tva);
      setResultat(resulatCalcul);
    };
  calculerTvaEffect();  
  }, [calculTvaState.tva]);

  function calculerTva() {
    let resulatCalcul = calculPourcentage(calculTvaState.nombreACalculer, calculTvaState.tva);
    setResultat(resulatCalcul);
  };

  let type="text";
  let placeholder="information";
  let value="information importante";
  // affichage
  // deux input fields
  //bouton de validation intituler calculer
  const useContextValue = useContext(UserContext);

  if (!useContextValue) {
    throw new Error("useContext must be used within a UserProvider");
  }

function changerUserName (value: string) {
  useContextValue?.setUser(value)
}
  return (
    <>
      <div>
      <div>{useContextValue?.user}</div>
        <button onClick={() => changerUserName("Florian")}>Context</button>
        <input
          type="number"
          onChange={(e) =>
            handleChange("nombreACalculer", parseFloat(e.target.value))
          }
          value={calculTvaState.nombreACalculer}
          placeholder="Nombre à calculer"
        ></input>
        <input
          type="number"
          onChange={(e) =>
            handleChange("tva", parseFloat(e.target.value))
          }
          value={calculTvaState.tva}
          placeholder="TVA"
        ></input>
        <input
          type="text"
          onChange={(e) =>
            handleChangeGen("description",e.target.value)
          }
          value={calculTvaState.description}
          placeholder="Description"
        ></input>
        <button onClick={() => calculerTva()}>Calculer</button>
        <div>Résultat:{resultat!}</div>

        <ComponentInput type={"text"} value={calculTvaState.information} placeholder={placeholder} onChangeInput={(valueOfInput: any) => handleChangeGen("information", valueOfInput)} />
        
        <ComponentInput type={"number"} value={calculTvaState.tva} placeholder={"tva"} onChangeInput={(valueOfInput: any) => handleChangeGen("information", valueOfInput)} />
      
      </div>
    </>
  );
};

export default CalculTva;

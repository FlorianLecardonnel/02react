import React from "react";

type props<T>= {
    type: string;
    value: T;
    placeholder:string;
}

const ComponentInput: React.FC<any> = ({type,value,placeholder,onChangeInput}) => {
    function modifierLaValeurInput(e:any){
        if (type === "number"){

        } else {
            onChangeInput(e.target.value)
        }
    }
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e)=> modifierLaValeurInput(e)}
                placeholder={placeholder}
            ></input>
        </div>
    )
}

export default ComponentInput;
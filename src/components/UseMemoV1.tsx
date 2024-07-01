import { useState, useMemo, useEffect, useRef } from "react";

let counter = 0;
const UseMemoV1: React.FC<any> = () => {
  const rendersNo = useRef(0);

  rendersNo.current = rendersNo.current + 1;
  const [tva, setTva] = useState(0);
  const [nbre, setNbre] = useState(0);
  const [resultat, setResultat] = useState(0);

  // time is a state variable that changes once per second,
  // so that it's always in sync with the current time.
  const time = useTime();

  function useTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = window.setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        window.clearInterval(intervalId);
      };
    }, []);

    return time;
  }
  //on vérifie si un des deux states a changer
  const calculer = useMemo(() => {
    setResultat(nbre * tva);
  }, [nbre, tva]);

  console.log("counting re-renders v4", rendersNo.current);
  return (
    <div>
      <>
        <p className="clock">{time! ? time.toLocaleTimeString() : ""}</p>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={tva}
          onChange={(e) => setTva(Number(e.target.value))}
        ></input>
        <br />
        <input
          type="number"
          value={nbre}
          onChange={(e) => setNbre(Number(e.target.value))}
        ></input>
        <button onClick={() => calculer}>calculer</button>Résultat {resultat}
      </>
    </div>
  );
};

export default UseMemoV1;

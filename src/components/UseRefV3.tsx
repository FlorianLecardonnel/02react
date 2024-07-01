import React, { useState, useEffect, useRef } from 'react';

// Déclare le composant fonctionnel PreviousValue
const PreviousValue: React.FC = () => {
  // Initialise l'état 'score' à 0 et fournit une fonction 'setscore' pour le mettre à jour
  const [score, setScore] = useState(0);
  
  // Crée une référence mutable pour stocker la valeur précédente de 'score'
  const prevScoreRef = useRef<number>();

  // Utilise un effet pour mettre à jour 'prevscoreRef.current' chaque fois que 'score' change
  useEffect(() => {
    prevScoreRef.current = score; // Met à jour la référence avec la valeur actuelle de 'score'
  }, [score]); // Dépendance sur 'score' signifie que cet effet s'exécute à chaque fois que 'score' change

  // Récupère la valeur précédente de 'score' depuis la référence
  const prevscore = prevScoreRef.current;

  // Rendu du composant
  return (
    <div>
      {/* Affiche la valeur actuelle de 'score' */}
      <p>Current score: {score}</p>
      {/* Affiche la valeur précédente de 'score' ou 'N/A' si elle n'est pas encore définie */}
      <p>Previous score: {prevscore !== undefined ? prevscore : 'N/A'}</p>

      {/* Bouton pour incrémenter la valeur de 'score' */}
      <button onClick={() => setScore(score + (Math.floor(Math.random() * 10)))}>Votre score</button>
    </div>
  );
}

// Exporte le composant pour l'utiliser dans d'autres parties de l'application
export default PreviousValue;

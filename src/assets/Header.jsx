import { useState } from "react";

export default function Language() {
    const [prova, setProva] = useState(null);

    const language = [
        { id: 1, linguaggio: "HTML", testo: "Struttura le pagine web." },
        { id: 2, linguaggio: "CSS", testo: "Stilizza le pagine web." },
        { id: 3, linguaggio: "JavaScript", testo: "Rende le pagine interattive." },
        { id: 4, linguaggio: "Node.js", testo: "Esegue JavaScript lato server." },
        { id: 5, linguaggio: "Express", testo: "Framework per server Node.js." },
        { id: 6, linguaggio: "ReactJS", testo: "Crea interfacce utente dinamiche." },
    ];

    function atClick(item) {
        setProva(item.testo);
    }

    return (
        <>
            <div className="d-flex flex-row gap-2 mb-3">
                {language.map((item) => (
                    <button
                        className="btn btn-primary text-white"
                        key={item.id}
                        onClick={() => atClick(item)}>
                        {item.linguaggio}
                    </button>
                ))}
            </div>
            {prova && (
                <p className="card p-3">{prova}</p>
            )}
        </>
    );
}
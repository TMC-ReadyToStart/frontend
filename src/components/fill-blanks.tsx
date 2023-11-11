import React, { useState } from "react";

const FillInTheBlanks = ({ text, blanks, onChange }) => {
    const parts = text.split(/(___)/g);
    const initialAnswers = blanks.map(() => "");
    const [answers, setAnswers] = useState(initialAnswers);

    const handleChange = (e, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = e.target.value;
        setAnswers(newAnswers);
        onChange(newAnswers);
    };

    return (
        <div>
            {parts.map((part, index) =>
                /(___)/.test(part) ? (
                    <input
                        key={index}
                        type="text"
                        value={answers[Math.floor(index / 2)]}
                        onChange={(e) => handleChange(e, Math.floor(index / 2))}
                        className="h-8 mx-1 text-center bg-blue-100 rounded"
                    />
                ) : (
                    <span key={index}>{part}</span>
                )
            )}
        </div>
    );
};

export default FillInTheBlanks;

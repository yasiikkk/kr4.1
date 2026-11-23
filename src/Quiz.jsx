import { useState } from 'react'

export default function Quiz({ question, answers, correct }) {
  const [isCorrect, setIsCorrect] = useState(false)

  return (
    <div>
      <h2>{question}</h2>
      {isCorrect && <p>ПРАВИЛЬНО!</p>}
      {answers.map((answer) => (
        <button key={answer} onClick={() => setIsCorrect(answer === correct)}>
          {answer}
        </button>
      ))}
    </div>
  )
}

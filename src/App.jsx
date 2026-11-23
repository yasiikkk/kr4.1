import Quiz from './Quiz'

export default function App() {
  return (
    <Quiz
      question="Столица Франции?"
      answers={['Берлин', 'Париж', 'Мадрид', 'Рим']}
      correct="Париж"
    />
  )
}

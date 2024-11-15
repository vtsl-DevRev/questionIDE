import React from 'react'
import { Link } from 'react-router-dom'
import './QuestionListComponent.css'

interface Testcases {
    input: string;
    output: string;
}

interface Constraints {
    time: string;
    space: string;
}

interface Question {
    id: number;
    title: string;
    description: string;
    input: string;
    output: string;
    difficulty: string;
    testcases: Testcases[];
    constraints: Constraints;
    tags: string;
}

interface QuestionListProps {
    questionsData: Question[];
    handleQuestionClick: (question: Question) => void;
}

const QuestionListComponent: React.FC<QuestionListProps> = ({ questionsData, handleQuestionClick }) => {

    return (
        <div id='questionsList'>
          <h1>Questions List</h1>
          <ul>
            {questionsData.map((question: Question) => (
              <li key={question.id}>
                <Link to={`/${question.id}`} onClick={() => handleQuestionClick(question)}>{question.title}</Link>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default QuestionListComponent
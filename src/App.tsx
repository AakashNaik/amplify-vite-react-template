import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import 'katex/dist/katex.min.css';
import QuestionCard from './components/QuestionCard';

const client = generateClient<Schema>();

function App() {
  const [question, setQuestions] = useState<Array<Schema["Questions"]["type"]>>([]);
  const [index, setIndex] = useState(0);
  //const maxQuestion = 0;
  useEffect(() => {
    client.models.Questions.observeQuery().subscribe({
      next: (data) => {setQuestions([...data.items]); console.log(data);},
    });

  }, []);

  function handleClick() {
    if(question&& question.length-1>index)
      setIndex(index + 1);
    else
      alert("No more questions");
    console.log(index);
  }

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  // function deleteTodo(id: string) {
  //   client.models.Todo.delete({ id })
  // }
  return (

    // <Authenticator>
    //   {({ signOut }) => (
        <main>

          {question.length>0 &&< QuestionCard mcq={{ questionText: question[index].question, optiona: question[index].optiona, optionb: question[index].optionb, optionc: question[index].optionc, optiond: question[index].optiond }} submit={handleClick}/>}
          
          <button onClick={()=>{}}>Sign out</button>
        </main>
    //   )}
    // </Authenticator>
  );
}

export default App;

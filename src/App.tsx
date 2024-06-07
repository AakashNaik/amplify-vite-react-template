import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Authenticator, Button, Card, CheckboxField, Radio, RadioGroupField } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Text } from '@aws-amplify/ui-react';

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  
  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }
    
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }
  return (
        
    <Authenticator>
      {({ signOut }) => (
    <main>
      
      
      <Card variation="elevated">
        <Text>
          Hello World!
        </Text>
        <RadioGroupField
          legend="options"
          name="options"
        >
          <Radio value="HTML">HTML</Radio>
          <Radio value="CSS">CSS</Radio>
          <Radio value="JavaScript">JavaScript</Radio>
        </RadioGroupField>
      </Card>
      <Button
        loadingText=""
        onClick={() => alert('hello')}
      >
        Submit
      </Button>
      <button onClick={signOut}>Sign out</button>
    </main>    
      )}
    </Authenticator>
  );
}

export default App;

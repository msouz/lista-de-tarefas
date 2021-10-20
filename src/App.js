import React, { useImperativeHandle, useState } from 'react';

import { Title, Title2 } from './styles.js'

function App() {
  const [task, setTask] = useState('');
  const [listTasks, setListTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const saveTask = () => {
    if (task == '') return alert('Digite uma tarefa!');

    setListTasks([...listTasks, task]);
    setTask('');
  };
  

  return (
    <div>
      <Title>Lista de Tarefas</Title>

      <Title2>
        Digite sua tarefa:
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
        />
      </Title2>
      <button onClick={saveTask}>Salvar</button>
     
      <ul>
        {listTasks.map(item => (
          <li index={item}>
            {item}
          </li>
        ))}
      </ul>


    </div>
    );
}

export default App;

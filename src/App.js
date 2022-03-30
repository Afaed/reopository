import React, { useEffect, createContext } from 'react';
import { StudentProvider, StudentContext } from './utils/StudentContext';
import StudentList from './components/StudentList';
import './jass.css';
import './app.css';

const GlobalStateContext = createContext()
function App() {
  const title = ' Providers';
  useEffect(() => {
    document.title = title;
  }, []);
  const initialState = {
    students: [
      {
      name: "",
      grade: 100
      }
    ],
    teacher: {}
  }

  return (
    <div className="app">
      <h1>State</h1>
      <h4 style={{ color: 'lightseagreen' }}>{title}</h4>
    {/* provides wrap all tge logic*/}
      <StudentProvider value = {initialState}>
        <StudentList />
      </StudentProvider>
    </div>
  );
}

export default App;

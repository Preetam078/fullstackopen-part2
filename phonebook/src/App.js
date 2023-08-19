import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '982764782',
    },
  ]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const[search, setSearch] = useState("");

  const handleFilter = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
    
      if(search !== ""){
        const filteredPersons = persons.filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        );
        setPersons(filteredPersons)
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the person already exists
    const personExists = persons.some(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (personExists) {
      alert(`${newName} is already in the phonebook record`);
      return; // Stop the function execution
    }

    const newPerson = {
      name: newName,
      number: number,
    };

    setPersons([...persons, newPerson]);
    setNewName(''); // Clear input after adding
    setNumber(''); // Clear input after adding
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter to search : <input type="text" value={search} onChange={handleFilter}/>
        </div>
      </form>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.length === 0 ? (
        <>...</>
      ) : (
        <>
          {persons.map((person) => (
            <div key={person.name}>
              {person.name} {person.number}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
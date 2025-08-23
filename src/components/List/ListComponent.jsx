import React from 'react';
import { useIdeasStore } from '../../store/ideasStore';
import './ListComponent.css';

export default function ListComponent() {
  const { ideas, newIdea, setNewIdea, addIdea, deleteIdea } = useIdeasStore();

  const handleAddIdea = () => {
    if (newIdea.trim() !== '') {
      addIdea({ id: Date.now(), text: newIdea });
      setNewIdea('');
    }
  };

  return (
    <section className="list-component">
      <h3 className="list-component__title">Crea tus ideas</h3>
      <div className='list-component__container'>
        <article className='list-component__add-idea'>
          <input 
            type='text' 
            placeholder='Añade una idea...' 
            value={newIdea || ''}
            onChange={(e) => setNewIdea(e.target.value)}
            aria-label='Texto de la idea'
            aria-describedby='Añadir'
            onKeyDown={(e) => e.key === 'Enter' && handleAddIdea()}
          />
          <button onClick={handleAddIdea} aria-label='Añadir idea'>Añadir</button>
        </article>

        <article className='list-component__ideas'>
          <h4>Ideas</h4>
          <ul className='list-component__ideas-list'>
            {ideas.map((idea) => (
              <li key={idea.id} className='list-component__idea-item'>
                <span>{idea.text}</span>
                <button onClick={() => deleteIdea(idea.id)} aria-label={`Eliminar idea ${idea.text}`}>X</button>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}


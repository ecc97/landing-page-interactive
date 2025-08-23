import {create} from 'zustand';

export const useIdeasStore = create((set) => ({
  ideas: [],
  newIdea: null,
  setNewIdea: (idea) => set({ newIdea: idea }),
  addIdea: (idea) => set((state) => ({ ideas: [...state.ideas, idea] })),
  deleteIdea: (id) => set((state) => ({ ideas: state.ideas.filter((idea) => idea.id !== id) })),
}));
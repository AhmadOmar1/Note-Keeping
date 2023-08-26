

const url = "http://localhost:3001";

export async function fetchNotes() {
    try {
        const response = await fetch(`${url}/notes`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
      }
}
export async function addNote(newNote) {
    try {
      const response = await fetch(`${url}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNote)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding note:', error);
      throw error;
    }
  }
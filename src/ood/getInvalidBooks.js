import yup, { string, object, number } from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];
function getInvalidBooks(books) {
  const invalidBooks = [];

  for (const item of books) {
    const schema = object({
      name: string().required().min(3),
      author: string().required().min(3),
      pagesCount: number().positive().integer(),
      link: string().url().min(1),
      genre: string().oneOf(genres),
    });

    if (!schema.isValidSync(item)) {
      invalidBooks.push(item);
    }
  }
  return invalidBooks;
}

export default getInvalidBooks;

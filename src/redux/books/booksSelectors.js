import { createSelector } from 'reselect';

export const getBooks = state => state.books.entities;

export const getFilter = state => state.books.filter;

export const getVisibleBooks = createSelector(
  [getBooks, getFilter],
  (books, filter) => {
    if (!filter) {
      return books;
    }
    const normalizedFilter = filter.toLowerCase();

    return books.filter(book =>
      book.title.toLowerCase().includes(normalizedFilter),
    );
  },
);

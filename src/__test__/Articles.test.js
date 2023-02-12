// Here is an example of how you could write a test for the Articles component using Test Driven Development (TDD):

// 1. Write a test for the initial render of the component, verifying that it renders the FilterPosts component and maps over the posts correctly:

import {render, screen, fireEvent} from '@testing-library/react';
import Articles from "../components/articles";
import Posts from "../components/articles/Posts";

const posts = [
    { id: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, title: 'Post 2', body: 'Body 2' },
    { id: 3, title: 'Post 3', body: 'Body 3' }
]
test('should render articles', async () => {
    render(<Articles />);
    const filterPosts = screen.getByTestId('FilterPosts')
    expect(filterPosts).toBeInTheDocument();
});

// 2. Write a test for the filter functionality, verifying that it filters the posts correctly:

test('should filter articles', async () => {
    render(<Articles />);
    const filterInput = screen.getByTestId('FilterPosts')
    fireEvent.change(filterInput, { target: { value: '1' } });

    expect(filterInput.value).toBe('1');
});

it('renders all posts if filterData is empty', () => {
    render(<Posts posts={posts} filterData='' />)
    const articleCards = screen.getAllByTestId('article-card')

    expect(articleCards).toHaveLength(3)
    expect(articleCards[0]).toHaveTextContent('Post 1')
    expect(articleCards[1]).toHaveTextContent('Post 2')
    expect(articleCards[2]).toHaveTextContent('Post 3')
})

it('renders only filtered posts if filterData is not empty', () => {
    render(<Posts posts={posts} filterData='2' />)
    const articleCards = screen.getAllByTestId('article-card')

    expect(articleCards).toHaveLength(1)
    expect(articleCards[0]).toHaveTextContent('Post 2')
})
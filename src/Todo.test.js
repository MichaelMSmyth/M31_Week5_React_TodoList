import {render, screen} from '@testing-library/react';
import Todo from './Todo';

const mockData = [
    'test1',
    'test2',
]


describe("todo tests", () => {
    test('renders the heading', () => {
        render(<Todo todos={mockData}/>>)
    })
})
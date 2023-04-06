import { render, screen } from "@testing-library/react";
import Home from "../../../src/pages/index";
import "@testing-library/jest-dom";

// describe("Home", () => {
//   it("renders a heading", () => {
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => {
//           return Promise.resolve("");
//         },
//       })
//     );
//     render(<Home />);

//     const heading = screen.getByText("Grocify");

//     expect(heading).toBeInTheDocument();
//   });
// })

// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import Home from "../../../src/pages/index";
// import "@testing-library/jest-dom";

// describe('Home component', () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//   });

//   it('fetches data and renders products on mount', async () => {
//     fetch.mockResponseOnce(JSON.stringify([{ id: 1, title: 'Product 1', images: ['image1'] }]));

//     render(<Home />);

//     await waitFor(() => {
//       expect(fetch.mock.calls.length).toEqual(1);
//     });

//     expect(screen.getByText('Product 1')).toBeInTheDocument();
//   });

//   it('filters products by title on input change', async () => {
//     fetch.mockResponseOnce(JSON.stringify([{ id: 1, title: 'Product 1', images: ['image1'] }, { id: 2, title: 'Product 2', images: ['image2'] }]));

//     render(<Home />);

//     await waitFor(() => {
//       expect(fetch.mock.calls.length).toEqual(1);
//     });

//     const searchInput = screen.getByPlaceholderText('Search product');

//     fireEvent.change(searchInput, { target: { value: 'Product 1' } });

//     expect(screen.getByText('Product 1')).toBeInTheDocument();
//     expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
//   });

//   // You can add more tests for the remaining functionality of the component
// });
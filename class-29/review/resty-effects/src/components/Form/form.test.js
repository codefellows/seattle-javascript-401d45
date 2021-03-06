import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';


describe('Testing the form component', () => {
  it ('should execute callback onSubmit', () => {

    const callback = jest.fn();

    render(<Form onSubmit={callback}/>);

    let urlInput = screen.getByTestId('url-input');
    let methodBtn = screen.getByTestId('get-btn');
    let submitBtn = screen.getByTestId('submit-btn');

    fireEvent.change(urlInput, {target: {value: 'http://test.test' }});
    fireEvent.click(methodBtn);
    fireEvent.click(submitBtn);

    expect(callback).toHaveBeenCalledWith({ url: 'http://test.test', method: 'GET'});
  });
});

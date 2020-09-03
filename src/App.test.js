import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import data from './data.json';

describe('La liga Users Managment', () => {
  beforeAll(() => jest.spyOn(window, "fetch"));  
  it('has a user name', () => {
    const {getByText} = render(<App/>);
    for( let user of data.data) {
      expect(getByText(user.first_name)).toBeInTheDocument();
    }
  });

  test('should list user from api', async () => {
    
    window.fetch.mockResolvedValueOnce({
      ok:true,
      json: async() => data.data
    })

    render(<App/>);

    expect(window.fetch).toHaveBeenCalledWith("https://reqres.in/api/users");
    expect(window.fetch).toHaveBeenCalledTimes(1);

    for (let user of data.data) {
      expect(await screen.findByText(new RegExp(`${user.first_name}\\b`, "i"))).toBeInTheDocument();
    }

  })
  
})


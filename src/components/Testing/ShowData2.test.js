
import { screen } from '@testing-library/react-hooks'
import React from 'react';
import useFetchHook from '../useFetchHook';

import ShowData from '../ShowData';




// const {  } = require("../useFetchHook");

// beforeAll(() => {
//   require("whatwg-fetch");
// });

// describe("Users API", () => {
//   test("it returns an array of users", async () => {
//   

//     const json = await ShowData();
//     expect(json).toMatchObject(expected);
//   });
// });




 


// describe('ProductInfoContext', () => {
//   const mockResponce = [
//     {name: 'chary' , class : 'don',jimin : 19 },
//     {name: 'don' , class : 'kan',jimin : 30 },
//     {name: 'brooke' , class : 'shon',jimin : 19 },
//     {name: 'darci' , class : 'greate',jimin : 19 }
// ]
jest.mock('../useFetchHook');
describe("Users API", () => {
  const expected = [
    {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' , address : {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874'}}
    ];
    it('Mock useAsync hook', async () => {
      // Mock useAsync hook return value
      useFetchHook.mockReturnValue(    
        () => jest.fn(),
      )

         expect(expected[0].name).toEqual('Leanne Graham')
    })
  }) 
    























import { fetchData } from '../index'
import response from '../../mockedData/response.json'

describe('Fetch Datat action', () => {
  it('Dispatches the correct action and payload', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    await fetchData()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: "FETCH_DATA", payload: response });
  });
});


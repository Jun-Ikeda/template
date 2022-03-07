type HelloWorldState = {
  message: string,
  count: number
};
type HelloWorldAction = {
  type: 'INIT_MESSAGE' | 'DELETE_MESSAGE' | 'SET_MESSAGE' | 'INIT_COUNT' | 'INCREMENT_COUNT' | 'DECREMENT_COUNT';
  payload: { message?: string; count?: number };
}

export { HelloWorldState, HelloWorldAction };

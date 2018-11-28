export default (state={ init: true }, action) => {
  switch (action.type) {
    case 'ABOUT LOADED':
      console.log('about page loaded with data!');
      return state;

    default:
      return state;
  }
}

export default (store: any) => (next: any) => async (action:  any) => {
  if (!action.callAPI) return next(action);

  const { callAPI, requestOptions, ...rest } = action;

  const allMovies = await fetch(callAPI, requestOptions).then((result: any) => {
    return result.text();
  });
  console.log(allMovies);

  next({ ...rest, allMovies });
}
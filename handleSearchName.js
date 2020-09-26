export function handleSearchName (input) {

  const formatedQuery = input.slice(0).toUpperCase();

  setQuery(formatedQuery);

  const filteredResult = list.filter(name => name.first_name.includes(input, formatedQuery) || name.last_name.includes(input, formatedQuery));

  setSearchResult(filteredResult);

};
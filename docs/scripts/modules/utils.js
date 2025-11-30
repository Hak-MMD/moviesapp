export function basicSearch(list, searchTerm) {
  const term = searchTerm.trim().toLowerCase();

  return list.filter((item) => item.title.toLowerCase().includes(term));
}

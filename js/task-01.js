const categoriesList = document.querySelectorAll('#categories .item');

console.log('Categories number:', categoriesList.length);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elementsItem = category.querySelectorAll('li').length;

  console.log('Category:', categoryName);
  console.log('Elements:', elementsItem);
});
export function getProducts() {
  return fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("products", JSON.stringify(data));
      return data;
    });
}

export function getProduct(name) {
  const products = JSON.parse(localStorage.getItem("products"));
  return products.find((item) => item.name.toLowerCase() === name);
}

export function findProductsByName(name) {
  const products = JSON.parse(localStorage.getItem("products"));
  return products.filter(
    (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
  );
}

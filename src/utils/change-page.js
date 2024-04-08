export const changePage = (page) => {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.append(page());
};

import { ApiService } from "../api.services";

const clientService = {
  //Get all Customers/Users
  getCustomers: () => {
    return new Promise(function(resolve, reject) {
      ApiService.get("/users")
        .then(({ data }) => {
          resolve(data);
          window.console.log("customers is", data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  //Get all Transactions for one user
  getTransaction: () => {
    return new Promise(function(resolve, reject) {
      ApiService.get("/transactions/me")
        .then(({ data }) => {
          resolve(data);
          window.console.log("customers is", data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  }
};

export { clientService };

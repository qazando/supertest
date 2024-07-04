const request = require("supertest");
const ApiUrl = "https://restful-booker.herokuapp.com";

describe("GET Reservas", () => {
  it("Deve retornar 200 ao fazer um GET em booking", () => {
    return request(ApiUrl)
      .get("/booking/")
      .expect(200)
  });

  it("Deve retornar os dados de uma reserva ao bater em booking id", () => {
    return request(ApiUrl)
      .get("/booking/419")
      .expect(200)
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.body.firstname).toEqual("John");
        expect(response.body.lastname).toEqual("Smith");
        expect(response.body.totalprice).toEqual(111);
        expect(response.body.depositpaid).toBeTruthy();
      });
  });
});
import mongoose from "mongoose";
import request from "supertest";

import app from "../index";

describe("Hobbies routes", () => {
  test('GET /hobbies', (done) => {
    request(app)
      .get(`/api/v1/hobbies`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toHaveProperty('message', "All hobbies fetched")
        return done()
      })
  })

  test('POST /hobbies/:userId', (done) => {
    const userId = '6251774ebe4e905f105eb983'
    request(app)
      .post(`/api/v1/hobbies/${userId}`)
      .send({
        name: "Jogging",
        passionLevel: "medium",
        year: "2017"
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toHaveProperty('message', "Hobby created & added successfully")
        return done()
      })
  })

  test('PUT /hobbies/:id', (done) => {
    const id = '62525d37fa3ce7f3fc4c9e08'
    request(app)
      .put(`/api/v1/hobbies/${id}`)
      .send({
        name: "Cricket",
        passionLevel: "low",
        year: "2018"
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toHaveProperty('message', "Hobby updated successfully")
        return done()
      })
  })

  test('DELETE /hobbies/:id', (done) => {
    const id = '62525d37fa3ce7f3fc4c9e08'
    request(app)
      .delete(`/api/v1/hobbies/${id}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toHaveProperty('message', "Hobby deleted successfully")
        return done()
      })
  })
});

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.disconnect();
  done();
});
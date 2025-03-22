const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const amadeus = require('../script/amadeusClient');
const axios = require('axios');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('e497998851d845ab96acf48dafccf31c');

router.get("/", (req, res) => {
    res.render('home');
});

router.get("/images/:slug", (req, res) => {
    res.sendFile(path.join(__dirname, `../static/images/${req.params.slug}`));
});

router.get("/home-assets/:slug", (req, res) => {
    res.sendFile(path.join(__dirname, `../home-assets/${req.params.slug}`));
});

router.get("/ticket-booking-assets/:slug", (req, res) => {
    res.sendFile(path.join(__dirname, `../ticket-booking-assets/${req.params.slug}`));
});

router.get("/css/:slug", (req, res) => {
    res.sendFile(path.join(__dirname, `../styles/${req.params.slug}`));
});

router.get("/js/:slug", (req, res) => {
    res.sendFile(path.join(__dirname, `../script/${req.params.slug}`));
});

router.get("/booktour", (req, res) => {
    res.render("booktour");
});

router.get("/news", async (req, res) => {
    try {
        const response = await newsapi.v2.everything({
            q: 'tourism',
            language: 'en',
            sortBy: 'publishedAt',
            pageSize: 10
        });

        const articles = response.articles;
        res.render('news', { articles });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching news articles');
    }
});

router.get("/ticket-booking", (req, res) => {
    res.render('ticket-booking');
});

router.get('/flights', async (req, res) => {
    let { origin, destination } = req.query;
  
    if (!origin || !destination) {

    origin = 'BOM';
    destination = 'DEL';
    }

    if(origin === destination)
    {
        (origin) => {
            destination = "BOM";
        }
    }
  
    try {
      const response = await amadeus.shopping.flightOffersSearch.get({
        originLocationCode: origin.toUpperCase(),
        destinationLocationCode: destination.toUpperCase(),
        departureDate: '2025-04-01',
        adults: '1'
      });

      const flights = response.data;
      const conversionRate = 90;

      for (let flight of flights) {
        const priceInEur = parseFloat(flight.price.total);
        const priceInInr = priceInEur * conversionRate;
        flight.price.total = priceInInr.toFixed(2);
        flight.price.currency = 'INR';
    }

    res.render('flights', { flights });
  } catch (error) {
    console.error(error);
  }
});

router.get('/hotels', async (req, res) => {
    let { cityCode } = req.query;

    if (!cityCode) {
        cityCode = 'BOM'; // Default to Mumbai if no city code is provided
    }

    try {
        const response = await amadeus.shopping.hotelOffers.get({
            cityCode: cityCode.toUpperCase(),
            sort: 'PRICE',
            rating: '4'
        });

        const hotels = response.data;
        const conversionRate = 90; // 1 EUR = 90 INR

        for (let hotel of hotels) {
            const priceInEur = parseFloat(hotel.offers[0].price.total);
            const priceInInr = priceInEur * conversionRate;
            hotel.offers[0].price.total = priceInInr.toFixed(2);
            hotel.offers[0].price.currency = 'INR';
        }

        res.render('hotels', { hotels });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching hotel recommendations');
    }
});

module.exports = router;
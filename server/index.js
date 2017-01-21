var express = require('express');
var app = express();

app.get('/api/test', function (req, res) {
  res.json({success: true})
})

app.get('/api/accounts', function (req, res) {
  res.json([{
    "id": "0",
    "name": "Expenses",
    "amount": 100000
   },
   {
    "id": "1",
    "name": "Entertainment",
    "parentId": "0",
    "amount": 80000
   },
   {
    "id": "2",
    "name": "Restaurants",
    "parentId": "1",
    "amount": 60000
   },
   {
    "id": "3",
    "name": "Coffee",
    "parentId": "1",
    "amount": 20000
   },
   {
    "id": "4",
    "name": "Car",
    "parentId": "0",
    "amount": 20000
   },
   {
    "id": "5",
    "name": "Income",
    "amount": 200000
   },
   {
    "id": "6",
    "name": "Salary",
    "parentId": "5",
    "amount": 100000
   },
   {
    "id": "7",
    "name": "Gas",
    "parentId": "4",
    "amount": 5000
   }
  ])
})

app.get('/api/accounts/:accountId/transactions', function (req, res) {

  const total = Math.floor(Math.random()*20)
  const data = []
  for(let i = 0; i < total; i++) {
    data.push({
      id: i.toString(),
      description: 'item ' + i,
      inAccountId: Math.random() > 0.5 ? i.toString() : Math.floor(Math.random()*10).toString(),
      outAccountId: Math.random() > 0.5 ? i.toString() : Math.floor(Math.random()*10).toString(),
      amount: Math.floor(Math.random()*10000)
    })
  }
  res.json(data)
})

app.get('*', function (req, res) {
  console.log(req.url)
  res.status(404).json({error: 'resource not found'})
});

app.listen(3001, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Server listening at http://localhost:3001/');
});

import axios from 'axios';

// POST PRODUCT //

axios.post('http://localhost:8080/api', {
    nombre: 'Leche',
    precio: 200,
    thumbnail: 'url'
  })
  .then(res => {
    console.log('--------------');
    console.log('-POST Product-');
    console.log(res.data);
    console.log('--------------');
  })
  .catch(function (error) {
    console.log(error);
});

// GET PRODUCTS //

axios.get('http://localhost:8080/api')
  .then(res => {
    console.log('--------------');
    console.log('-GET Products-');
    console.log(res.data);
    console.log('--------------');
  })
  .catch(function (error) {
    console.log(error);
});

// PUT PRODUCTS //

axios.get('http://localhost:8080/api')
  .then(res => {
    let id = res.data[0].id
    axios.put('http://localhost:8080/api/'+id,{
            nombre: "jugote",
            precio: 564,
            thumbnail: 'url'
         }) 
         .then(res => {
            console.log('--------------');
            console.log('-PUT Products-');
            console.log(res.data);
            console.log('--------------');
         })
         .catch(err => {
            console.log(err);
         })
  })
  .catch(function (error) {
    console.log(error);
});

// POST PRODUCT //

axios.post('http://localhost:8080/api', {
    nombre: 'Casancrem',
    precio: 550,
    thumbnail: 'url'
  })
  .then(res => {
    console.log('--------------');
    console.log('-POST Product-');
    console.log(res.data);
    console.log('--------------');
  })
  .catch(function (error) {
    console.log(error);
});

axios.get('http://localhost:8080/api')
  .then(res => {
    let id = res.data[1].id
    axios.delete('http://localhost:8080/api/'+id) 
         .then(res => {
            console.log('-----------------');
            console.log('-DELETED Product-');
            console.log(res.data);
            console.log('-----------------');
         })
         .catch(err => {
            console.log(err);
         })
  })
  .catch(function (error) {
    console.log(error);
});







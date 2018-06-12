const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ***************************************************************
// ***************************************************************

let users = [
    {id: 0, username: 'admin', password: '123456', name: 'harvey', email: 'harveympv@hotmail.com', image: 'xxx.png'}
   
];

/*let contacts = [
    {id: 0, name: 'Carlos Mosquera', phone: '1111111111', email: 'aaaaa@gmail.com', image: 'http://stokpic.com/wp-content/uploads/2018/03/Man-looking-out-to-the-ocean-at-a-sail-boat.jpg'},
    {id: 1, name: 'Sara Gonzalez', phone: '2222222222', email: 'bbbbb@hotmail.com', image: 'http://stokpic.com/wp-content/uploads/2018/02/Beautiful-bride-smelling-her-bouquet-flowers.jpg'},
    {id: 2, name: 'Dario Rodriguez', phone: '3333333333', email: 'ccccc@gmail.com', image: 'http://stokpic.com/wp-content/uploads/2017/07/Close-up-of-mans-face-wet-from-ocean.jpg'},
    {id: 3, name: 'Erika Narvaez', phone: '4444444444', email: 'ddddd@hotmail.com', image: 'http://stokpic.com/wp-content/uploads/2017/06/African-American-woman-leaning-against-a-wall-1.jpg'},
    {id: 4, name: 'Juan Maya', phone: '5555555555', email: 'eeeee@gmail.com', image: 'http://stokpic.com/wp-content/uploads/2017/04/Happy-Couple-Getting-Married-With-Confetti-And-Flowers.jpg'}
];*/
let xbox = [
    {id: 0, name: 'Fornite', descriptio: 'El mejor juego gratuito con su nuevo modo Batlel Royal', precio: 'GRATUITO', image: 'http://stokpic.com/wp-content/uploads/2018/03/Man-looking-out-to-the-ocean-at-a-sail-boat.jpg'},
    {id: 1, name: 'Halo Master Colletion', descriptio: 'La gran coleccion del mas grande heroe recopilado en toda la saga', precio: '$150.000', image: 'http://stokpic.com/wp-content/uploads/2018/02/Beautiful-bride-smelling-her-bouquet-flowers.jpg'},
    {id: 2, name: 'Gears of Wars', descriptio: 'Continua la historia sobre la destruccion de la tierra y como un grupo de soldados tienen que liberarla', precio: '$125.000', image: 'http://stokpic.com/wp-content/uploads/2017/07/Close-up-of-mans-face-wet-from-ocean.jpg'},
    {id: 3, name: 'Fifa 2018', descriptio: 'Vive mas de cerca con tus jugadores favoritos el gran estreno de el nuevo juego', precio: '$216.000', image: 'http://stokpic.com/wp-content/uploads/2017/06/African-American-woman-leaning-against-a-wall-1.jpg'},
    {id: 4, name: 'GTA V', descriptio: 'La mejor saga de rock star con su nueva entrega en el nuevo modo de juego online', precio: '185.000', image: 'http://stokpic.com/wp-content/uploads/2017/04/Happy-Couple-Getting-Married-With-Confetti-And-Flowers.jpg'}
];
let nintendo = [
    {id: 0, name: 'Mario Kart 8', descriptio: 'Compite por ser el mejor de la pista ', precio: '$125.000', image: 'http://stokpic.com/wp-content/uploads/2018/03/Man-looking-out-to-the-ocean-at-a-sail-boat.jpg'},
    {id: 1, name: 'The Legend of zelda', descriptio: 'Regresa a la historia con Link en su epica aventura por encontrar a Zelda', precio: '$150.000', image: 'http://stokpic.com/wp-content/uploads/2018/02/Beautiful-bride-smelling-her-bouquet-flowers.jpg'},
    {id: 2, name: 'Mario Odyssey', descriptio: 'Regresa el fontanero favorito con sus nuevas aventuras en cientos de mundos', precio: '$125.000', image: 'http://stokpic.com/wp-content/uploads/2017/07/Close-up-of-mans-face-wet-from-ocean.jpg'},
    {id: 3, name: 'Splatoon', descriptio: 'Esta vez la aventura es bajo la pintura , diviertete', precio: '$216.000', image: 'http://stokpic.com/wp-content/uploads/2017/06/African-American-woman-leaning-against-a-wall-1.jpg'},
    {id: 4, name: 'Kirby', descriptio: 'Vuelve el personaje rosa esta vez con mas divercion y mas mundos', precio: '185.000', image: 'http://stokpic.com/wp-content/uploads/2017/04/Happy-Couple-Getting-Married-With-Confetti-And-Flowers.jpg'}
];

let play = [
    {id: 0, name: 'God of war', descriptio: 'El dios de la guerra a vuelto y esta vez dejara su legado', precio: '$125.000', image: 'http://stokpic.com/wp-content/uploads/2018/03/Man-looking-out-to-the-ocean-at-a-sail-boat.jpg'},
    {id: 1, name: 'Farcry5', descriptio: 'La historia mas solicitada por los fans esta de vuelta', precio: '$150.000', image: 'http://stokpic.com/wp-content/uploads/2018/02/Beautiful-bride-smelling-her-bouquet-flowers.jpg'},
    {id: 2, name: 'Monster Hunter', descriptio: 'Vive la era de los dragones y lucha por ser el dominador de todo', precio: '$125.000', image: 'http://stokpic.com/wp-content/uploads/2017/07/Close-up-of-mans-face-wet-from-ocean.jpg'},
    {id: 3, name: 'Call of duty iii', descriptio: 'La tercera guerra mundial esta aqui y tienes que luchar o todo se ira abajo', precio: '$216.000', image: 'http://stokpic.com/wp-content/uploads/2017/06/African-American-woman-leaning-against-a-wall-1.jpg'},
    {id: 4, name: 'Rocket League', descriptio: 'Imagina un partido de futbol pero esta vez desde coches, pues ven y sigue la emocionante aventura', precio: '185.000', image: 'http://stokpic.com/wp-content/uploads/2017/04/Happy-Couple-Getting-Married-With-Confetti-And-Flowers.jpg'}
];
// ***************************************************************
// ***************************************************************

app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

app.get('/users', (req, res) => {
    res.send(users)
})

// Validar usuarios al momento de hacer login
app.post('/validateUser', (req, res) => {
    let data = req.body;
    let usersTmp = [{success: false, id: 0, username: '', password: '', name: '', email: '', image: ''}];

    users.some(function (value, index, _arr) {
        if( (value.username == data.Username) && (value.password == data.Password) ){
            usersTmp[0]['success'] = true;
            usersTmp[0]['id'] = value.id;
            usersTmp[0]['username'] = value.username;
            usersTmp[0]['password'] = value.password;
            usersTmp[0]['name'] = value.name;
            usersTmp[0]['email'] = value.email;
            usersTmp[0]['image'] = value.image;
            return true;
        }else{
            return false;
        }
    });

    res.send(usersTmp)
})

// Crear usuarios para una nueva cuenta
app.post('/createUser', (req, res) => {
    let data = req.body;
    let consecutive = users.length;
    let usersTmp = [{
        success: true,
        id: consecutive,
        username: data.Username,
        password: data.Password,
        name: data.Name,
        email: data.Email,
        image: 'xxx.png'
    }];
    users.push(usersTmp[0])

    res.send(usersTmp)
})
//Listar todos los user
app.get('/users', (req, res) => {
    let pos = 0;
    users.forEach(function(entry) {
        entry.id = pos;
        pos++;
    });
    res.send(users)
})
//LISTAR XBOX
app.get('/xbox', (req, res) => {
    let pos = 0;
    xbox.forEach(function(entry) {
        entry.id = pos;
        pos++;
    });
    res.send(xbox)
})
//agregar xbox
app.post('/createxbox', (req, res) => {
    let data = req.body;
    let consecutive = xbox.length;
    let usersTmp = [{
        success: true,
        id: consecutive,
        descriptio: data.Descriptio,
        name: data.Name,
        precio: data.Precio,
        image: 'xxx.png'
    }];
    xbox.push(usersTmp[0])

    res.send(usersTmp)
})
//agregar nintendo
app.post('/createnintendo', (req, res) => {
    let data = req.body;
    let consecutive = nintendo.length;
    let usersTmp = [{
        success: true,
        id: consecutive,
        descriptio: data.Descriptio,
        name: data.Name,
        precio: data.Precio,
        image: 'xxx.png'
    }];
    nintendo.push(usersTmp[0])

    res.send(usersTmp)
})
//agregar ps
app.post('/createplay', (req, res) => {
    let data = req.body;
    let consecutive = play.length;
    let usersTmp = [{
        success: true,
        id: consecutive,
        descriptio: data.Descriptio,
        name: data.Name,
        precio: data.Precio,
        image: 'xxx.png'
    }];
    play.push(usersTmp[0])

    res.send(usersTmp)
})
//LISTAR nintendo
app.get('/nintendo', (req, res) => {
    let pos = 0;
    nintendo.forEach(function(entry) {
        entry.id = pos;
        pos++;
    });
    res.send(nintendo)
	})
	//LISTAR play
app.get('/play', (req, res) => {
    let pos = 0;
    play.forEach(function(entry) {
        entry.id = pos;
        pos++;
    });
    res.send(play)
	})
	
	//Eliminar xbox
	app.delete('/xbox/:id',(req, res) => {
    let params = req.params;
    xbox.splice(params.id, 1);
    res.send('xbox delete')
	})
		//Eliminar nintendo
	app.delete('/nintendo/:id',(req, res) => {
    let params = req.params;
    nintendo.splice(params.id, 1);
    res.send('nintendo delete')
	})
		//Eliminar play
	app.delete('/play/:id',(req, res) => {
    let params = req.params;
    play.splice(params.id, 1);
    res.send('play delete')
})
//ACTUALIZAR XBOX
app.put('/xbox/:id',(req, res) => {
    let params = req.params;
    let data = req.body;
    xbox[params.id]['name'] = data.Name;
    xbox[params.id]['descriptio'] = data.Descriptio;
    xbox[params.id]['precio'] = data.Precio;
    res.send("xbox update")
})
/*
// Listar todos los contactos
app.get('/contacts', (req, res) => {
    let pos = 0;
    contacts.forEach(function(entry) {
        entry.id = pos;
        pos++;
    });
    res.send(contacts)
})

// Eliminar un contacto
app.delete('/contacts/:id',(req, res) => {
    let params = req.params;
    contacts.splice(params.id, 1);
    res.send('Contact delete')
})

// Actualizar un contacto
app.put('/contacts/:id',(req, res) => {
    let params = req.params;
    let data = req.body;
    contacts[params.id]['name'] = data.Name;
    contacts[params.id]['phone'] = data.Phone;
    contacts[params.id]['email'] = data.Email;
    res.send("Contact update")
})

// Crear contactos
app.post('/contacts', (req, res) => {
    let data = req.body;
    let consecutive = contacts.length;
    let contactTmp = [{
        id: consecutive,
        name: data.Name,
        phone: data.Phone,
        email: data.Email,
        image: 'http://stokpic.com/wp-content/uploads/2015/09/Everything-Apple-iMac-iPhone-iPad-Macbook-And-Apple-Watch.jpg'
    }];
    contacts.push(contactTmp[0])

    res.send("Contact create")
})

// *************************************************************
// *************************************************************
 */
http.createServer(app).listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
})
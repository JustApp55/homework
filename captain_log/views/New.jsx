const React = require('react')

class New extends React.Component {
    render(){
        return (
            <html lang="en">
          <link rel="stylesheet" href="/css/app.css"/>
            <head>
             <meta charset="UTF-8" />
           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
             <title>Pokèmon</title>
            </head>
            <body style={{backgroundImage: 'url(https://wallpaperaccess.com/full/1360529.jpg'}}>
            <div>
            <h1></h1>
            <form action="/logs" method="POST">
                <input type="text"/>
                <input type="textarea"/>
                <input type="checkbox"/>
                <input type="submit"/>

            </form>
            </div>
        </body>
    </html>
        )
    }
}
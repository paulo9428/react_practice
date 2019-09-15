// var h1 = React.createElement('h1', null, 'Hello world!')
//         ReactDOM.render(
//             h1,
//             document.getElementById("content")
//         )

// let h1 = React.createElement('h1', null, 'Hello world!')
// class HelloWorld extends React.Component{
//     render(){
//         return React.createElement('div', null, h1, h1)
//     }
// }
// ReactDOM.render(
//     React.createElement(HelloWorld, null),
//     document.getElementById('content')
// )


// ReactDOM.render(
//     React.createElement('div', null, h1, h1),
//     document.getElementById('content')
// )

// React.createElement('a', {href:'http://node.university'})

// render(){
//     if (this.PaymentResponse.heading) return <h1>Hello</h1>
//     else return <p>Hello</p>
// }



ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld,{
            id: 'ember'
            frameworkName: 'Ember.js'
            title: 'A framework for creating blah blah'

        }),
        React.createElement(HelloWorld,{
            id:'backbone'
            frameworkName:'backbone.js'
            title: 'backbone.js gives structure blah blah'
        }),
        React.createElement(HelloWorld,{
            id:'angular'
            frameworkName:'angular js'
            title: 'superheroic javascript blah blah'
        })
    
    ),
    document.getElementById('content')
)

class HelloWorld extends React.Component{
    render(){
        return React.createElement(
            "h1",
            this.props,
            'Hello ' + this.props.frameworkName + ' world'
        )
    }
}


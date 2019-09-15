// ReactDOM.render(
//     <h1>Hello world!</h1>
//     document.getElementById('content')
// )


// class HelloWorld extends React.Componet{
//     render(){
//         return(
//             <div>
//                 <h1>1. hello world</h1>
//                 <h2>2. hello world</h2>
//             </div>
           
//         )
//     }
// }
// ReactDOM.render(
//     <HelloWorld/>,
//     document.getElementById('content')
// )

class DateTimeNow extends React.Component{
    render(){
        let dateTimeNow = new Date().toLocaleString()
        return <span>Current date and time is {dateTimeNow}</span>
    }
}




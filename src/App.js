import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    /*1. The first or common way to write arrow function */
    common = () => {
        console.log('This is the first or common way to write arrow function ')
      }

    /*2. Arrow function without curly braces if return statement is one*/
    singleReturn = () => console.log('Arrow function without curly braces if return statement is one')

    /*3. Arrow function with multiple return statement */
    multipleReturn = () => {
        console.log('Arrow function with multiple return statement return 1') 
        console.log('Arrow function with multiple return statement return 2')
    }

    /*4. Arrow function with single parameter and without parenthesis in parameter*/
    singleParameter = val => {console.log(`Arrow function with single parameter and without parenthesis in parameter ${val}`)}

    /*4. Arrow function with single parameter and without parenthesis in parameter*/
    multipleParameter = (val, val2) => {
        console.log(`Arrow function with single parameter and without parenthesis in parameter ${val} and  ${val2}`)
    }
     /*5. Arrow function with Object Literal */
    objectLiteral = (age, name) => ({age: age, name:name})

    /*6. Arrow  function use case in map */
    useWithMap = () => {
       axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
           const data = res.data
           data.map(d => {console.log(d.name)})
       })
    }

    /*7. Async await arrow function */
    asyncAwaitFunction = async () => {
        const res = await axios.get('http://jsonplaceholder.typicode.com/users')
        console.log(res.data)
    }
    
      componentDidMount(){
          this.common()
          this.singleReturn()
          this.multipleReturn()
          this.singleParameter('-- passing the value')
          this.multipleParameter('-- passing the value 1', '-- passing the value 2')
          console.log(this.objectLiteral(27, 'Manish'))
          this.useWithMap()
          this.asyncAwaitFunction()
      }
    render() {
        return (
            <div style={{textAlign: "center"}}>
                  <h1>Arrow Function</h1>
                  <p>Open console for data</p>
            </div>
        )
    }
}


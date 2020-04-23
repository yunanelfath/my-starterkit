import React from 'react';
import BottomNavigation from 'components/BottomNavigation'
import {
  apiGetHomepage
} from 'api/homepage.api'

class Homepage extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  async componentDidMount(){
    await apiGetHomepage().then((e)=>{
      const {
        response
      } = e
      console.log(response[0]);
    })
  }
  render(){
    return (
      <>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          ini homepage
        </header>
      </div>
      <BottomNavigation />
      </>
    );
  }
}
export default Homepage;

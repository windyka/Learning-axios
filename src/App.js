import React, { Component } from 'react';
import './App.css';
import Homes from './page/Home'
import Navbars from './components/Navbar'
import Axios from 'axios'
// import Kontak from './page/Kontak';
// import Events from './page/Event'
// import Abouts from './page/About'

class App extends Component {

  state = {
    posts: []
  }

  getDataFromAPI = () => {
    Axios
      .get('https://api-demo.koding.sch.id/api/book')
      .then((res) => {
        console.log(res.data.data)
        this.setState({
          posts: res.data.data
        })
        console.log(this.state.posts, ">>>>>INIPOST")
      })
      .catch((err) => {
        console.log(err)
      })

  }

  componentDidMount() {
    this.getDataFromAPI()
  }

  render() {
    const { posts } = this.state
    return (
      <div className="App">
        <Navbars />
        <Homes posts={posts} />

        {/* <Kontak />
        <Events />
        <Abouts /> */}
      </div>
    );
  }
}

export default App;

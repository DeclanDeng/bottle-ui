import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Button from './components/Button/button';
// import Alert from './components/Alert/alert';
// import Menu from './components/Menu/menu';
// import MenuItem from './components/Menu/menuItem';
// import SubMenu from './components/Menu/subMenu';
// import Icon from './components/Icon/icon';
// import Transition from './components/Transition/transition';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  // const [show, setShow] = useState(false)
  // const [title, setTitle] = useState('');
  // const postData = {
  //   title: 'my title',
  //   body: 'hello man'
  // }

  // useEffect(() => {
  //   axios.post('https://jsonplaceholder.typicode.com/posts', postData).then(res => {
  //     setTitle(res.data.title);
  //   });    
  // })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const uploadedFile = files[0];
      const formData = new FormData();
      formData.append(uploadedFile.name, uploadedFile);
      axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res);
      })
    }
  } 

  return (
    <div className="App">
      <header className="App-header">
        <input type="file" name="myFile" onChange={handleFileChange}/>
        {/* <h1>{title}</h1> */}
        {/* <Icon icon="coffee" theme="info" size="10x" /> */}
        {/* <Menu mode="horizontal" defaultOpenSubMenus={['2']} defaultIndex='0' onSelect={(index) => {alert(index)}}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        <Button size="lg" onClick={() => { setShow(!show) }} >Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
            <p>Edit <code>src/App.tsx</code> and save to reload.</p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
          wrapper
        >
          <Button btnType="primary" size="lg">A large Button</Button>
        </Transition> */}
        {/* <Alert>hello</Alert> */}
        {/* <Button className="custom">Hello</Button>
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="http://www.google.com">Google Link</Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.google.com">Google Link</Button> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

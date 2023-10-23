import React, { useId, useState } from 'react';
import uuid from 'react-uuid'
import ReactFlow, { Background} from 'react-flow-renderer';
import MyButton from './components/MyButton'

function FlowComponent() {
  const [showDialog, setShowDialog] = useState(false);
  const [inputData, setInputData] = useState(' ');
  const [nodes, setNodes] = useState([]);

  const handleButtonClick = () => {
      setShowDialog(true);
  };

  const handleButtonSubmit = () => {
    // upon submit, create a new node based on input data
    const newNode = {
      id: uuid(),
      type: 'default',
      data: { label: inputData},
      position: {x: Math.random()*400, y:Math.random()*400}
    };

    setNodes( (existingNodes) => {
      return ([...existingNodes, newNode])
    })

    setInputData('');
    setShowDialog(false);
  }

  return (
      <div>
          <MyButton onClick={handleButtonClick} label="Add Node" />
          
          
      {showDialog && (
        <div style={{border: '1px solid black', padding: '10px', marginTop: '20px'}}>
          <textarea 
            placeholder="Enter node data" 
            value={inputData}
            onChange={(e) => setInputData(e.target.value)} 
          />
          <br />
          <button onClick={handleButtonSubmit}>Submit</button>
          <button onClick={() => setShowDialog(false)}>Cancel</button>
        </div>
      )}

      {/* {capturedData && (
        <div style={{border: '1px solid blue', padding: '10px', marginTop: '20px'}}>
          {capturedData}
        </div>
      )} */}

      <ReactFlow nodes={nodes} style={{ width: '100vw', height: '100vh' }}>
        {console.log(nodes)}
        {/* <Background /> */}
      </ReactFlow>

      </div>
  );
}

export default FlowComponent;

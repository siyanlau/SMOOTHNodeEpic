import React, { useId, useState } from 'react';
import uuid from 'react-uuid'
import ReactFlow, {useNodesState, Controls, Background} from 'react-flow-renderer';
import MyButton from './components/MyButton'
import 'reactflow/dist/style.css'

function FlowComponent() {
  const [showDialog, setShowDialog] = useState(false);
  const [inputData, setInputData] = useState(' ');
  const [nodes, setNodes, onNodesChange] = useNodesState([]);

  const handleButtonClick = () => {
      setShowDialog(true);
  };

  const handleButtonSubmit = () => {
    // upon submit, create a new node based on input data
    const newNode = {
      id: uuid(),
      type: 'default',
      data: { label: inputData},
      position: {x: Math.random()*400, y:Math.random()*400},
      draggable: true
    };

    setNodes( (existingNodes) => {
      return ([...existingNodes, newNode])
    })

    setInputData('');
    setShowDialog(false);
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{position:'absolute', zIndex:10}}>
        
        <MyButton  
        onClick={handleButtonClick} 
        label="Add Node" 
      />
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

      </div>

    <ReactFlow nodes={nodes} onNodesChange={onNodesChange} style={{ width: '100vw', height: '100vh' }}>
      <Controls />
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  </div>
  )
}

export default FlowComponent;

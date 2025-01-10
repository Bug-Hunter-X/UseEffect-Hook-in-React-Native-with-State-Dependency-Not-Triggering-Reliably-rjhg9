```javascript
// useEffectBug.js
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Initial');

  useEffect(() => {
    console.log('useEffect triggered with count:', count);
    //Problem: This might not update as expected if name changes frequently
    //This is a stale closure problem
  }, [count]);

  useEffect(() => {
    console.log('useEffect triggered with name:', name);
  }, [name]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Text>Name: {name}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Button title="Change Name" onPress={() => setName(name === 'Initial' ? 'Changed' : 'Initial')} />
    </View>
  );
};

export default MyComponent;
```
```javascript
// useEffectBugSolution.js
import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Initial');

  useEffect(() => {
    console.log('useEffect triggered with count:', count);
    console.log('useEffect triggered with name:', name);
  }, [count, name]); // Correct solution: Include both count and name in dependencies

  return (
    <View>
      <Text>Count: {count}</Text>
      <Text>Name: {name}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Button title="Change Name" onPress={() => setName(name === 'Initial' ? 'Changed' : 'Initial')} />
    </View>
  );
};

export default MyComponent;
```
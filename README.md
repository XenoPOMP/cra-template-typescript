# React TypeScript Template
You can use this template to create clear React app boilerplate. \
Made by [XenoPOMP](https://github.com/XenoPOMP).

## Getting started
```bash
git clone --depth 1 --branch master https://github.com/XenoPOMP/cra-template-typescript.git your-project-name
cd your-project-name
npm install
```

## Guides
* [React](http://localhost:300)
* [Redux](http://localhost:300)

## Available scripts
### ``npm run start``
Runs development server of your React App at [http://localhost:3000](http://localhost:3000)

### ``npm run build``
Start build of your app. When build will end, you can find it in ``build/index.html``

## Redux
This React template uses Redux as state library.

### Index file
It locates at ``./src/assets/redux/index.ts``. There are imports from ``reducer-list.ts``. If you need to add your reducers to reducer combiner, just import them in ``reducer-list.ts`` and then export them:

#### reducer-list.ts
```ts
import { cashReducer } from './reducers/cashReducer';
import { customerReducer } from './reducers/customerReducer';

export { cashReducer, customerReducer };
```

Now you can import them in index file by typing the following row:
#### index.ts
```ts
import { cashReducer, customerReducer } from './reducer-list';
```

Then you need to put these reducer inside combine reducer`s function and also to give a name to it:
```ts
import { combineReducers, createStore } from 'redux';
import { cashReducer, customerReducer } from './reducer-list';

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer,
});

export const store = createStore(rootReducer);
```

### React Redux implementation
To use Redux inside React-component, you have to import ``useDispatch`` and ``useSelector`` hooks from ``react-redux``
```ts
import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch();
```

#### useDispatch
This hook is used to change state in state object of Redux. \
This hook takes an ``action`` object;

```tsx
import { useDispatch } from 'react-redux';

const MyComponent = () => {
  const dispatch = useDispatch();
  
  const action = {
    type: 'SOME_TYPE_HERE',
    payload: 'ANY PAYLOAD DATA'
  };
  
  dispatch(action);
  
  return (
    <>
      <button onClick={() => dispatch(action)}>
        Click me
      </button>
    </>
  );
}
```

#### useSelector
This hook is used to get value from state object of Redux. 

```tsx
import { useSelector } from 'react-redux';

const variable = useSelector((state) => state.path.to.variable);
```
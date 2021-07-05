import './App.css';
// import ClickCounter from './ClickCounter';
// import HoverCount from './HoverCount';
// import Hero from './components/Hero';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import EventBind from './components/EventBind';
// import FunctionClick from './components/FunctionClick';
// import Greet from './components/Greet';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Welcome from './components/Welcome';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table'
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParent from './components/FRParent';
// import PortalDemo from './components/PortalDemo';
// import ErrorBoundary from './ErrorBoundary';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';
import User from './User';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Beasky" heroName="Batman">
      <p>This is the children props</p>
      </Greet>
      <Greet name="Afyzo" heroName="Birdman">
      <button>Action</button>
      </Greet>
      <Greet name="Baddest" heroName="Wonderwoman" />
      <Welcome name="Beasky" heroName="Batman" />
      <Welcome name="Afyzo" heroName="Birdman" />
      <Welcome name="Baddest" heroName="Wonderwoman" />
      <Hello />
      <Message />
      <Counter /> 
      <FunctionClick />
      <ClassClick />
      <EventBind /> 
      <ParentComponent />
      <UserGreeting />
      <NameList /> 
      <Stylesheet primary={true} /> 
      <Inline /> 
      <Form /> 
      <LifecycleA /> 
      <FragmentDemo /> 
      <Table /> 
      <ParentComp /> 
      <RefsDemo /> 
      <FocusInput />
      <FRParent /> 
      <PortalDemo /> 
      <ErrorBoundary>
      <Hero heroName='Superman' />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Joker' />
      </ErrorBoundary> 
      <ClickCounter />
      <HoverCount /> 
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Beaskyy' : 'Guest'} /> */}
      <Counter>
      {(count, clickHandler) => 
      <ClickCounterTwo count={count} clickHandler={clickHandler} />}
      </Counter>
      <Counter>
      {(count, clickHandler) => 
      <HoverCounterTwo count={count} clickHandler={clickHandler} />}
      </Counter>
      
    </div>
  );
}

export default App;

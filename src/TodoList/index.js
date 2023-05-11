function TodoList(props) {
    return <ul style={{
        listStyle:'none',
        padding: '0 56px 0',
        margin: '0px'
    }}>
        {props.children}
    </ul>;
  }
  
  export { TodoList };
  
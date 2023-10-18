function TernaryOperator() {
    let loggedIn = true;
    return(
       <div>
          <h2>Logged In</h2>
          { loggedIn ? <p>Welcome</p> : <p>Please login</p> }
       </div>
    );
   
}

export default TernaryOperator;

/*
Ternary conditional operators are concise alternative to if statements. It takes three arguments:
1. A conditional expression that evaluates to true or false followed by a question mark ( ? )
2. An expression that evaluates if the conditional is true followed by a colon ( : )
3. Followed by an expression that evaluates iff the conditional is false
 */
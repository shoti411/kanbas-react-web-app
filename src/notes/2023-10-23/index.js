function TestFunc() {
    const alice = {  first: 'Alice',  last: 'Wonderland',  salary: 100000};
    return ( 
        <div>
            <h1>Test Function</h1>

            <h3>{alice.salary}</h3>

            <h4>{alice.salary += 10000}</h4>

            <h4>{alice['salary'] = alice.salary + 10000}</h4>

            <h4>{alice.salary}</h4>
        </div>
     );
}

export default TestFunc;
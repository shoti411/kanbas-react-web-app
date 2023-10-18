import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    
    let variableArray1 = [
       functionScoped,   blockScoped,
       constant1,        numberArray1,   stringArray1
    ];
    // printing of all variables defined in section 2.2.7
    console.log("2.2.7 Working With Arrays");
    console.log(functionScoped);
    console.log(blockScoped);
    console.log(constant1);
    console.log(numberArray1);
    console.log(stringArray1);
    console.log(variableArray1);
    // 2.2.7.1 Array index and length
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    console.log(length1);
    console.log(index1);
    // 2.2.7.2 Adding and Removing Data to/from Arrays
    console.log("2.2.7.2 Adding and Removing Data to/from Arrays");
    
    //2.2.7.3 For Loops
    console.log("2.2.7.3 For Loops");

    //2.2.7.4 The Map Function
    console.log("2.2.7.4 The Map Function");

    //2.2.7.5 JSON Stringify
    console.log("2.2.7.5 JSON Stringify");

    //2.2.7.6 The Find Function
    console.log("2.2.7.6 The Find Function");

    // 2.2.7.7 The Find Index Function
    console.log("2.2.7.7 The Find Index Function");

    // 2.2.7.8 The Filter Function
    console.log("2.2.7.8 The Filter Function");



    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <DynamicStyling/>
            <PathParameters/>
            <JavaScript/>
            
            
            
        </div>
    )
}
export default Assignment3;
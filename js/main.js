document.querySelector('#btn').addEventListener('click', giveResults);
document.querySelector('#resetBtn').addEventListener('click', resetFields);
    let setArr = [];
    let repArr = [];
    let weightArr = [];
    let workingSet = Number(document.querySelector('#workingSet').value);
    let setAmt = Number(document.querySelector('#setsVal').value);
    let setReps = Number(document.querySelector('#repsVal').value);
    let incVal = Number(document.querySelector('#incVal').value);
    let units = document.querySelector('#unit').value;

//functions to build set and rep arrays
function buildSetArr(n){
    for(let i=n; i<=10; i++){
        setArr.push(i-n);
    };
};
function buildRepArr(n){
    for(let i=n; i<=10; i++){
        repArr.push(i);
    };
};
// calculating each set of warmup by reducing working set by the increment
function buildWarmUpArr(initWeight,WorkingSetReps,inc){
    let workWeight = initWeight;
    let increment = inc;
    for(let i=WorkingSetReps; i<=10; i++){
        weightArr.push(workWeight -= increment)
    } return workWeight;
}

// creating the dom ouput to be inserted into the section

function giveResults(){
    getWarmUp();
    if(workingSet === 0){
        alert("Please enter a valid number")
        resetFields()
    }
    weightArr.unshift(workingSet);
    if (setArr.length === repArr.length){
        for(nums of setArr){

            //if the working number of sets is less than 5, give full array
            if(setArr.length<5){
                document.querySelector(`#n${nums}`).innerText = `${weightArr[nums]} x ${repArr[nums]}`;
            // to keep the warm up weight more than 0
            } else if (weightArr[nums]> 0){
                document.querySelector(`#n${nums}`).innerText = `${weightArr[nums]} x ${repArr[nums]}`;
            } 
        }
    } else if (setArr.length < repArr.length){
        alert("The number of reps is less than sets. Support for this type coming soon.")
        resetFields()
    } else {
        alert("The number of sets is less than reps per set. Support for this type coming soon.")
        resetFields()
    }
    // adds the set amount to the working set
    document.querySelector(`#n0`).innerText += ` x ${setAmt}`
}

function getWarmUp(){
    workingSet = Number(document.querySelector('#workingSet').value);
    setAmt = Number(document.querySelector('#setsVal').value);
    setReps = Number(document.querySelector('#repsVal').value);
    incVal = Number(document.querySelector('#incVal').value);
    units = document.querySelector('#unit').value;
    setArr = [];
    repArr = [];
    weightArr = [];
//loops to get total set and reps needed
    buildSetArr(setAmt);
    buildRepArr(setReps);
    buildWarmUpArr(workingSet,setAmt,incVal);
}
//reset all user input fields
function resetFields(){
    for(let i=0; i<10; i++){
        document.querySelector(`#n${i}`).innerText = '';
    }
    document.forms["userInput"].reset();
}
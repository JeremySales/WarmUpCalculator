document.querySelector('#btn').addEventListener('click', giveResults);
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
    weightArr.unshift(workingSet);
    for(nums of setArr){

        //if the working number of sets is less than 5, give full array
        if(setArr.length<5){
            document.querySelector(`#n${nums}`).innerText = `${weightArr[nums]} x ${repArr[nums]}`;
        // to keep the warm up weight more than 0
        } else if (weightArr[nums]> 0){
            document.querySelector(`#n${nums}`).innerText = `${weightArr[nums]} x ${repArr[nums]}`;
        } 
    }
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

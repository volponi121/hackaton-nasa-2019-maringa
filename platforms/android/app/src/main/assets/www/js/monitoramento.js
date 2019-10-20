function updateValuesProgressCircle(){
    //random values
    document.getElementById('progressProfile').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressSteps').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressRunning').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressTasks').progressCircle.update(Math.floor(Math.random() * 100) + 1);
}
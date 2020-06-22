import pkg from 'gulp';
const { task } = pkg;

task('hello', async function(){
    console.log('My first gulp task');
})
task('hello2', async function(){
    console.log('My second gulp task');
})
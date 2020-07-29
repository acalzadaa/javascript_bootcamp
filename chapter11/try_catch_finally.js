try {
    console.log("execute a line");
    throw new Error("This is an error!");
} catch (err) {
    console.log("The error just arrived!");
} finally {
    console.log("Calm down... the error just passed thru");
}


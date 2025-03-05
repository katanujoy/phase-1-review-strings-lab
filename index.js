function greetUser(name) {
    return `Hello, ${name}! Welcome to Flatbook.`;
}

function excitedGreeting(name) {
    return `HELLO, ${name.toUpperCase()}! WELCOME TO FLATBOOK!`;
}

function shortGreeting(name) {
    return `Hi, ${name.slice(0, 1)}!`;
}
console.log(greetUser("Alice")); 
console.log(excitedGreeting("Alice")); 
console.log(shortGreeting("Alice")); 

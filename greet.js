function greet (name) {
    switch (name){
    case (name.isArray()):
        return `Hello, ${name.join(',')}`;
    case (name.toUpperCase()):
        return `HELLO ${name}`;
        break;
    case (name):
        return `Hello, ${name}!`;
        break;
    default:
        return 'Hello there!';
    }
}
